import createRootReducer from './reducer';
import createStore from './store';

const store = createStore(createRootReducer());

export default store;

export type RootState = ReturnType<typeof store['getState']>;