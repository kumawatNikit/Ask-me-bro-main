import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage ke liye
import authReducer from "./slices/authSlice";

// Persist config
const persistConfig = {
  key: "root",
  storage, // Local storage
};

const persistedReducer = persistReducer(persistConfig, authReducer);

// Configure store
const store = configureStore({
  reducer: {
    auth: persistedReducer, // Use persisted reducer
  },
});

// Persistor
const persistor = persistStore(store);

export { store, persistor };
