import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/PublicRoutes/router";
import { FloatingWhatsApp } from "react-floating-whatsapp";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function App() {
  return (
    <div className="poppins">
      <RouterProvider router={router}></RouterProvider>
      <FloatingWhatsApp phoneNumber="+880123456789" accountName="Alex"/>
    </div>
  );
}

export default App;
