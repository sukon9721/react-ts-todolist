import { FC, ReactElement, useCallback, useState } from 'react';
import TdInput from './Input';
import TdList from './List';
import { ITodo } from './typings';

interface IProps {}

const TodoList: FC<IProps> = (): ReactElement => {
  // 初始化state
  const [todoList, setTodoList] = useState<ITodo[]>([]);

  const toggleTodo = useCallback(function (id: number): void {
    setTodoList((preState: ITodo[]): ITodo[] =>
      preState.map(
        (todo: ITodo): ITodo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const removeTodo = useCallback((id: number): void => {
    setTodoList((preState: ITodo[]): ITodo[] =>
      preState.filter((todo: ITodo): boolean => todo.id !== id)
    );
  }, []);

  // TODO: 这个函数不知道为什么获取 state 都是初始值
  // codesandbox.io 简单模拟不会出现这个问题
  const addTodo = (newTodo: ITodo): boolean => {
    setTodoList((prevTodoList:ITodo[]) => {
      const isExist = prevTodoList.some((todo) => todo.content === newTodo.content)
      return isExist ? prevTodoList : [...prevTodoList.concat(newTodo)]
    });

    // 以上原因，先返回true
    return true
  }

  return (
    <div className="todo-list">
      <TdInput addTodo={addTodo}/>
      <TdList
        todoList={todoList}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      ></TdList>
    </div>
  );
};

export default TodoList;
