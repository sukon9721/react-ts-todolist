import { ACTION_TYPE, IAction, IState, ITodo } from './typings';

export const initialState: ITodo[] = [];

export function getInitialState(initialState: ITodo[]): IState {
  return {
    todoList: initialState,
  };
}

function todoReducer(state: IState, { type, payload }: IAction): IState {
  switch (type) {
    case ACTION_TYPE.ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, payload as ITodo],
      };
    case ACTION_TYPE.TOGGLE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          return todo.id === payload
            ? {
                ...todo,
                completed: !todo.completed,
              }
            : { ...todo };
        }),
      };
    case ACTION_TYPE.REMOVE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo.id !== payload),
      };
    case ACTION_TYPE.INIT_TODO:
      return getInitialState(payload as ITodo[]);
    case ACTION_TYPE.CLEAR_TODO:
      return getInitialState(initialState);
    default:
      return state;
  }
}

export default todoReducer;
