import Home from './Page/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Myprofile from './Page/Myprofile';

function App() {
  return (
    <div className="App">
<Router>
<Routes>
<Route exact path="/" element={<Home/>}/>

<Route path="/profile" element={<Myprofile/>} />


</Routes>

</Router>
      
      
     
    </div>
  );
}

export default App;
