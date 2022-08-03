import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
   <BrowserRouter>
    <div className="App">
       <Routes>
       <Route  path='/' element={<SignIn/>}/>
       <Route  path='/form' element={<SignUp/>}/>
       <Route  path='/home' element={<Home/>}/>
       <Route  path='/character/:id' element={<Detail/>}/>
       </Routes>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
