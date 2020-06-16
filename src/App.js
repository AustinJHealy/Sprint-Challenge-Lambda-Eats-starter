import React from "react";
import { Route } from 'react-router-dom';
import HomePage from "./components/HomePage";
import PizzaForm from "./components/PizzaForm";
import './App.css';

const App = () => {
  
  return (
  <div className="routes">
  <Route exact path="/" component={HomePage}/>
  <Route exact path="/pizza" component={PizzaForm} />
   </div>
  );
};
export default App;
