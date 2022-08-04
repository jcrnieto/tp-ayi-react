import { Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Detail from './components/Detail';
import FilterCharacter from './components/FilterCharacter';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
 
    <div className="App">
    <Routes>
       <Route  path='/' element={<SignIn/>}/>
       <Route  path='/form' element={<SignUp/>}/>
       <Route  path='/home' element={<Home/>}/>
       <Route  path='/filter' element={<FilterCharacter/>}/>
       <Route  path='/character/:id' element={<Detail/>}/>
       {/* <Route path="private/*" element={<PrivateRoute />} /> */}
     </Routes>
    
       
    </div>
    
    
  );
}

export default App;
