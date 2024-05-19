import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/PublicRoutes/router";
import { FloatingWhatsApp } from "react-floating-whatsapp";

function App() {
  return (
    <div className="poppins">
      <RouterProvider router={router}></RouterProvider>
      <FloatingWhatsApp phoneNumber="+8801998827178" accountName="Pulok"/>
    </div>
  );
}

export default App;
