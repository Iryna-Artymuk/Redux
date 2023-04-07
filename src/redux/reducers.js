import { allFilters } from '../redux/constants';
import { combineReducers } from 'redux';
const initialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'tasks/addTask':
      return [...state, action.payload];
    case 'tasks/deleteTask':
      return state.filter(task => task.id !== action.payload);
    case 'tasks/toggleCompleted':
      return state.map(task => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    case 'tasks/sortByName': {
      const sortState = state.sort(function (a, b) {
        return a.text.localeCompare(b.text);
      });
      console.log(sortState);
      return sortState;
    }

    default:
      return state;
  }
};

const filtersInitialState = {
  status: allFilters.all,
};
// Відповідає лише за оновлення властивості filters
// Тепер значенням параметра state буде об'єкт фільтрів
const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case 'filters/setStatusFilter':
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export const rootReducer = combineReducers(
  //   // Повертаємо загальний  об'єкт стану  який зап ишеться в store
  {
    // передаємо тільки частину стану tasks, масив завдань який запишеться в
    //загальний  об'єкт стану як властивість обєкту
    tasks: tasksReducer,
    filters: filtersReducer,
    // передаємо тільки частину стану  filters, рґдок  який  запишеться в
    //загальний  об'єкт стану як властивість обєкту
  }
);

// export const rootReducer = (state = {}, action) => {
//   // Повертаємо об'єкт стану
//   return {
//     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
