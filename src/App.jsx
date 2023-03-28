import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Create from "./pages/Create";
import { useState, createContext } from "react";

export const UsersContext = createContext(null);

function App() {
  const [users, setUsers] = useState([]);
  // [{name:"sfdvj",dob:new Date(),gender:"Male",city:"tvm",id:new Date()}]
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home users={users} setUsers={setUsers} />,
    },
    {
      path: "/create",
      element: <Create />,
    },
  ]);

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      <RouterProvider router={router} />
    </UsersContext.Provider>
  );
}

export default App;
