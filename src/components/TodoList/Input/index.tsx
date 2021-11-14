import { useRef, FC, ReactElement, useCallback } from 'react';
import { ITodo } from '../typings';

interface TProps {
  todoList: ITodo[];
  addTodo: (todo: ITodo) => void;
  clearTodo: () => void;
}

const TdInput: FC<TProps> = ({
  todoList,
  addTodo,
  clearTodo,
}): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = useCallback((): void => {
    const val: string = inputRef.current!.value.trim();
    if (val === '') return;

    const isExist =
      todoList.length !== 0 && todoList.some((todo) => todo.content === val);

    if (isExist) {
      alert('重复');
      return;
    }

    addTodo({
      id: new Date().getTime(),
      content: val,
      completed: false,
    });

    !isExist && (inputRef.current!.value = '');
  }, [todoList]);

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入待办" ref={inputRef} />
      <button onClick={addItem}>添加</button>
      <button onClick={clearTodo}>清空</button>
    </div>
  );
};

export default TdInput;
