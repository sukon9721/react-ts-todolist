import { FC, ReactElement, useCallback, useEffect, useReducer } from 'react';
import TdInput from './Input';
import TdList from './List';
import { ACTION_TYPE, ITodo } from './typings';
import todoReducer, { getInitialState } from './reducer';
import { getStoreItem, setStoreItem } from '../../utils/localStorage';

interface IProps {}

const TodoList: FC<IProps> = (): ReactElement => {
  // 初始化state
  const [state, dispatch] = useReducer(todoReducer, [], getInitialState);

  const toggleTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.TOGGLE_TODO,
      payload: id,
    });
  }, []);

  const removeTodo = useCallback((id: number): void => {
    dispatch({
      type: ACTION_TYPE.REMOVE_TODO,
      payload: id,
    });
  }, []);

  const addTodo = useCallback((newTodo: ITodo): void => {
    dispatch({
      type: ACTION_TYPE.ADD_TODO,
      payload: newTodo,
    });
  }, []);

  const clearTodo = useCallback(():void => {
    dispatch({type: ACTION_TYPE.CLEAR_TODO})
  }, [])

  // mounted
  useEffect(() => {
    dispatch({
      type: ACTION_TYPE.INIT_TODO,
      payload: getStoreItem('todoList') as ITodo[],
    });
  }, []);

  // update
  useEffect(() => {
    setStoreItem('todoList', state.todoList);
  }, [state.todoList]);

  return (
    <div className="todo-list">
      <TdInput addTodo={addTodo} todoList={state.todoList} clearTodo={clearTodo} />
      <TdList
        todoList={state.todoList}
        toggleTodo={toggleTodo}
        removeTodo={removeTodo}
      ></TdList>
    </div>
  );
};

export default TodoList;
