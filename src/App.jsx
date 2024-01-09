import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  Navbar,
  Dashboard,
  UserView,
  UserEdit,
  UserAdd,
  Error,
  Footer,
} from "./components";
import Notification from "./features/Notification";
import { createBrowserRouter, Outlet } from "react-router-dom";
function App() {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-between bg-backgroundColor dark:bg-black">
      <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
        <Notification />
      </Provider>
    </div>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/view/:id",
        element: <UserView />,
      },
      {
        path: "/edit/:id",
        element: <UserEdit />,
      },
      {
        path: "/add",
        element: <UserAdd />,
      },
    ],
    errorElement: <Error />,
  },
]);
export default App;
