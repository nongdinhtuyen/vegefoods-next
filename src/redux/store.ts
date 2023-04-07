import { INIT } from './actions/user';
import rootReducers from './root_reducers';
import rootSaga from './root_saga';
import createSagaMiddleware from '@redux-saga/core';
import { configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware: any) => [
    ...getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
      // serializableCheck: {
      //   ignoredActions: ignoredActions,
      // },
    }),
    sagaMiddleware,
  ],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

sagaMiddleware.run(rootSaga);

export default store;
