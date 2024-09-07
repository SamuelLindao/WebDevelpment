
import './App.css'
import {Header} from "./components/Header.tsx";
import {HeaderTasks} from "./components/HeaderTasks.tsx";
import {SubHeader} from "./components/SubHeader.tsx";
import {UserProfileMinVe} from "./components/UserProfileMinVe.tsx";

function App() {

  return (
    <>
        <Header />
        <SubHeader/>
        <div className="General_Container">
            <div className="Main_Div">
                <HeaderTasks/>
            </div>
            <div className="MainRight_Div">
                <UserProfileMinVe/>
            </div>
        </div>
    </>
  )
}

export default App
