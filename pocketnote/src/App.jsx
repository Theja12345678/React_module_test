import MainPage from "./Pages/MainPage/MainPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import store from "./component/Slice/Store";
import { Provider } from "react-redux";

import HomePage from "./Pages/HomePage/HomePage";
import NotePage from "./Pages/NotePage/NotePage";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage/>,
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "/chats/:id",
          element: <NotePage/>
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;