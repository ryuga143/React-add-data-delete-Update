
import './App.css';
import Resize from './EventListener';
import SecondComp from './Usestatehook';
import Input from './FormEvents'; 
import FourthComp from './Useeffecthook';
import Usestatehook from './Usestatehook';
import Useeffecthook from './Useeffecthook';
import Events from './Events';
import MouseEvents from './MouseEvents';
import List from './List';
import DataManagement from './data';

const add={
  newname : 'Krishna',
  city: 'Chennai',
  work: 'Developer'
}

function App() {
  return (
    <div className="App">
      {/* <Resize/>  */}
      {/* <Usestatehook />  */}
      <DataManagement />
      {/* <Useeffecthook/> */}
      {/* <MouseEvents/> */}
      {/* <Events/> */}
      {/* <List/> */}
    </div>
  );
}

export default App;


