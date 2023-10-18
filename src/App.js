import './App.css';

import Sidebar from './Sidebar';
import Rightside from './RightSide';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Sidebar/>
       <Rightside/>
      </header>
    </div>
  );
}

export default App;
