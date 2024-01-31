import {AnyAction, combineReducers, configureStore} from '@reduxjs/toolkit';

import {logInfo, logObject} from '@helpers';
import {nknownNormalizers} from '@network';
import {nknown} from '@redux/slices';

const customMiddleWare = (api: any) => (next: any) => (action: any) => {
  const [, actionName] = action.type.split('/');
  if (actionName && actionName in nknownNormalizers) {
    action.payload = nknownNormalizers[
      actionName as keyof typeof nknownNormalizers
    ](action.payload, api.getState());
  }

  if (__DEV__) {
    logInfo(`Action name: "${actionName}" \n`);
    logObject('Payload:', action.payload);
  }
  next(action);
};
const middlewares = [customMiddleWare];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
const reducers = {
  nknown: nknown.reducer,
};
const rootReducer = combineReducers(reducers);
const resettableRootReducer = (
  state: ReturnType<typeof rootReducer>,
  action: AnyAction,
) => {
  if (action.type === 'auth/logout') {
    state = {...state};
    Object.keys(reducers).forEach(key => delete state[key]);
  }

  return rootReducer(state, action);
};
export const store = configureStore({
  reducer: resettableRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(middlewares),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
