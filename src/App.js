import logo from "./logo.svg";
import "./App.css";
import ProfilePhoto from "./Component/Profile/ProfilPhoto";
import FullName from "./Component/Profile/FullName";
import Adresse from "./Component/Profile/Adress";

function App() {
  return (
    <div className="center">
      <ProfilePhoto />
      <FullName />
      <Adresse />
    </div>
  );
}

export default App;
