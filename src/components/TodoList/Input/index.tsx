import { useRef, FC, ReactElement, useCallback } from 'react';
import { ITodo } from '../typings';

interface TProps {
  addTodo: (todo: ITodo) => boolean;
}

const TdInput: FC<TProps> = ({ addTodo }): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addItem = useCallback((): void => {
    const val: string = inputRef.current!.value.trim();
    
    if (val === '') return
    
    const isSuccess: boolean = addTodo({
      id: new Date().getTime(),
      content: val,
      completed: false,
    });

    inputRef.current!.value = isSuccess ? '' : inputRef.current!.value;
    isSuccess || alert('重复');
  }, []);

  return (
    <div className="todo-input">
      <input type="text" placeholder="请输入待办" ref={inputRef} />
      <button onClick={addItem}>添加</button>
    </div>
  );
};

export default TdInput;
