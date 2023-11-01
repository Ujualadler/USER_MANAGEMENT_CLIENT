
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { storage} from "redux-persist/lib/storage"; 


import { Adminreducer } from './AdminAuth'; 
import { Clientreducer } from './ClientAuth';

const persistConfig = {
  key: 'admin', 
  storage,
};

const persistedAdminReducer = persistReducer(persistConfig, Adminreducer);
const persistedClientReducer = persistReducer(persistConfig, Clientreducer);

export const Store = configureStore({
  reducer: {
    Admin: persistedAdminReducer,
    Client:persistedClientReducer
  },
});

export const persistor = persistStore(Store);
