import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import componentReducer from "./componentsReducer";

const store = configureStore({
  reducer: {
    user: userReducer,

    // components state (complex, undo/redo)
    components: componentReducer,
    //
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
