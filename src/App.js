import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "react-day-picker/dist/style.css";

function App() {
  return (
    <div className="max-w-[1540px] mx-auto text-accent">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
