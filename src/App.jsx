import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/PublicRoutes/router";

function App() {
  return (
    <div className="poppins">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
