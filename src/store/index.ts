import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import componentReducer from "./componentsReducer";
import pageInfoReducer from "./pageInfoReducer";

const store = configureStore({
  reducer: {
    user: userReducer,

    // components state (complex, undo/redo)
    components: componentReducer,

    pageInfo: pageInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
