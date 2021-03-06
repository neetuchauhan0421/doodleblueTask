import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
// Main Routes file
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import appReducer from "../src/containers/reducers";



const initialState = {};

const middleware = [thunk];

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const store =
  process.env.NODE_ENV === "development"
    ? createStore(
      rootReducer,
      initialState,
      compose(
        applyMiddleware(...middleware),
      //  window.__REDUX_DEVTOOLS_EXTENSION__ &&
      // window.__REDUX_DEVTOOLS_EXTENSION__()
      )
    )
    : createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    );

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="doodleblueTask">
        <Route exact path="/" name="Dashboard" component={Dashboard} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;