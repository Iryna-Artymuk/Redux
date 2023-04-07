import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducers';

// const rootReducer = (state = {}, action) => {
//   return {
//     tasks: tasksReducer(state.tasks, action),
//     filters: filtersReducer(state.filters, action),
//   };
// };
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);

// console.log(store.getState());
