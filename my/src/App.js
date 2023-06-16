import './App.css'
import AllRoutes from './Routes';
import Nav from './component/Nav';

import Home from './pages/Home';

function App() {
  return (
    <div className="App">
       <Nav/>
   
     <AllRoutes/>

    </div>
  );
}

export default App;
