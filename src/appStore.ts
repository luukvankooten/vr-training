import createRootReducer from './reducers';
import createStore from './store';
import applyMiddleware, { Middleware } from './store/middleware';


const logger = (store) => (next) => (action) => {
  console.log(action);
  return action;
}

const store = createStore(createRootReducer(), applyMiddleware(logger));

export default store;

export type RootState = ReturnType<typeof store['getState']>;