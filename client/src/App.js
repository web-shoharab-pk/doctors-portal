import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Appoinment from './components/Appoinment/Appoinment/Appoinment';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AllPatients from './components/Dashboard/Dashboard/AllPatients/AllPatients';
import Prescriptions from './components/Dashboard/Prescriptions/Prescriptions';
import AddDoctors from './components/Dashboard/AddDoctors/AddDoctors';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Appoinments from './components/Dashboard/Appoinments/Appoinments';


export const UserContaxt = createContext({})


const App = () => {
  const [userInfo, setUserInfo] = useState({}) 
  const [isDoctor, setIsDoctor] = useState(false);

  return (
    <UserContaxt.Provider value={{userInfo: userInfo, setUserInfo: setUserInfo, isDoctor, setIsDoctor}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/appoinment">
            <Appoinment />
          </PrivateRoute>
          
          <PrivateRoute path="/dashboard/appoinments">
            <Appoinments />
          </PrivateRoute>
          <PrivateRoute path="/dashboard/patients">
            <AllPatients></AllPatients>
          </PrivateRoute>
          <PrivateRoute path="/addDoctor">
            <AddDoctors></AddDoctors> 
          </PrivateRoute>
          <PrivateRoute path="/dashboard/prescriptions">
             <Prescriptions></Prescriptions> 
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>

    </UserContaxt.Provider>
  );
};

export default App;