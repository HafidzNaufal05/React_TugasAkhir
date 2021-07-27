import './App.css';
import React from 'react'
//import Chart from './Atom/Chart/Chart'
import Navbar from './Molecules/Navbar'
import Register from './Molecules/Modal/Register'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component{

    render(){
      return (
        <>
        <Navbar />
        <Register />
        </>
      );
    }
} 