import './../App.css';
import Sidebar from './../Components/Sidebar/Sidebar'
import Main from './../Components/Main/Main'

function MainComponent() {
  return (
    <div className="app">
        <Sidebar />
        <Main />
    </div>
  );
}

export default MainComponent;
