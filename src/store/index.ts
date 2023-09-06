import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import pageInfoReducer from "./pageInfoReducer";
import componentsReducer from "./componentsReducer";

import undoable, { excludeAction } from "redux-undo";

const store = configureStore({
  reducer: {
    user: userReducer,

    // components: componentReducer,
    components: undoable(componentsReducer, {
      limit: 5,
      filter: excludeAction([
        "components/resetComponents",
        "components/SelectedIdChanged",
        "components/selectPreviousComponent",
        "components/selectNextComponent",
      ]),
    }),

    pageInfo: pageInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
