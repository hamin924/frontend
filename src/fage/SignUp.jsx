import Modal from './components/Modal';
import NavBar from './components/molecule/NavBar';
import './App.css';
import React from 'react';


function SingUp(){
    return(
        <div className = "SingUpPage">
            <div className="App">
                <NavBar></NavBar>
                <Modal/>
            </div>
        </div>
    )
}

export default SingUp;