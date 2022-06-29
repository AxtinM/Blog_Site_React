import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/useSlices";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { logout } from "../features/useSlices";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

export const persistor = persistStore(store);

export const clearStorage = async (cb) => {
  await persistor.purge();
  return cb();
};
