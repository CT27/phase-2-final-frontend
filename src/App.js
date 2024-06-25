import "./App.css";
import DashBoard from "./Components/DashBoard/DashBoard";
import TimeSheet from "./Components/TimeSheet/TimeSheet";
import LoginSignup from "./Components/LoginSignup/LoginSignup";

function App() {
  return (
    <>
      <LoginSignup />
      <DashBoard />
      <TimeSheet />
    </>
  );
}

export default App;
