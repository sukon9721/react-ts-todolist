import { FC, ReactElement } from 'react';
import { ITodo } from '../typings';

interface IProps {
  todo: ITodo;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
}

const TdItem: FC<IProps> = ({
  todo: { id, content, completed },
  toggleTodo,
  removeTodo,
}): ReactElement => {
  return (
    <div className="td-item">
      <input
        type="checkbox"
        id=""
        onChange={() => toggleTodo(id)}
        value={content}
      />
      <span style={{ textDecoration: completed ? 'line-through' : 'none' }}>
        {content}
      </span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  );
};

export default TdItem;
