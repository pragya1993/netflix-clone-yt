import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import HomeScreen from './HomeScreen';
// import { selectUser } from "./features/userSlice"
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

import Login from './Login';

function App() {
  const user = useSelector(selectUser); 
  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(authUser=>{
    
       if(authUser)
       {
       // login
       dispatch(login({
        uid: authUser.uid,
        email:authUser.email

       }))
       }
       else
       {
        //logout
        dispatch(logout())
       }
    })
     return unsubscribe;
  },)
  
  return (
    <div className="App">
      {
        !user ? (<Login/>) : 
        (<HomeScreen/>) 
      }
    
    </div>
  );
}

export default App;
