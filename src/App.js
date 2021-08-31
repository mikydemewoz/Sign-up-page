import './App.css';
import Navbar from './components/Navbar'
import LeftSide from './components/LeftSide'
import RightSide from './components/RightSide'
import group1 from './images/Group 7.png'
import img1 from './images/06.png'

function App() {
  return (
    <div className="App">
        <Navbar class="fixed top-0 z-50" />
        <div class="flex  align-center">
          <LeftSide />
          <img src={group1} class="w-80 absolute top-1/3 left-2/4 z-0 ml-24" />
          <RightSide class="z-40" />
          <img src={img1} class="w-80 h-96 absolute top-62 left-1/3 z-50 ml-72 rotate-90 mt-16" />
        </div>
    </div>
  );
}

export default App;