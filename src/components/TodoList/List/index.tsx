import { FC, ReactElement } from 'react';
import { ITodo } from '../typings';
import TdItem from './Item';

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdList: FC<IProps> = ({ todoList, toggleTodo, removeTodo }): ReactElement => {
  return (
    <div className="td-list">
      {
        todoList && todoList.map((todo:ITodo) => (
          <TdItem todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} key={todo.id} />
        ))
      }
    </div>
  );
};

export default TdList;
