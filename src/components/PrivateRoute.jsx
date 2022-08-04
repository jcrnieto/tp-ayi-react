import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';



const PrivateRoute = () => {
  return (
     <>
      <Routes>
        <Route path='/home' element={<Home/>}/>
      </Routes>
     </>
  )
}

export default PrivateRoute

// import {Route, Navigate} from 'react-router-dom';



// const PrivateRoute = ({component: Component, ...rest}) => {
//   let auth;
//   auth =true
//   auth=null;
//   return (
//     <Route {...rest}>{auth ? <Component /> : <Navigate to='/'/>} </Route>
//   )
// }

//  export default PrivateRoute;

// import React from 'react';
// import {Route,Navigate} from "react-router-dom";
// //import {isauth}  from 'auth'
// const authed = false
// function PrivateRoute({ element, path }) {
//  // const authed = isauth() 
//   const ele = authed === true ? element : <Navigate to="/"  />;
//   return <Route path={path} element={ele} />;
// }

// export default PrivateRoute