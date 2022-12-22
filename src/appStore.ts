//Configure the store.
//In the appStore is where the applications state lives.
import Actions from './actions';
import scenesMiddleware from './middlewares/scenesMiddleware';
import createRootReducer from './reducers';
import createStore from './store';
import applyMiddleware from './store/middleware';

const rootReducer = createRootReducer();

const store = createStore<RootState, Actions>(rootReducer, applyMiddleware(scenesMiddleware));

export default store;

export type RootState = ReturnType<typeof rootReducer>;