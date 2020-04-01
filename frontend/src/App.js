import React from 'react';
import './App.css';
import {FaPlay} from 'react-icons/fa'


const text = "i've tried so hard and got so far but in the end it doesn't even matter"

function newReturn(){
   
  const api = window.speechSynthesis;

  const fala = new SpeechSynthesisUtterance(text);

  fala.lang = 'en-US'
  
  api.speak(fala);
}

function Verificar(){
  let input = document.querySelector('input')

  if(input.value == ''){
    return
  }
  if(input.value === text){
    alert('Acertou Mizeravi')
  }
}

function App() {

  return (
    
    <div className="App"> 
      <h1>Projeto de um ditado em andamento</h1>
      <h3>Clique para ouvir</h3>     
      <button className='btn' onClick={newReturn}>
        <FaPlay id='icon' color="white" size='32' />
      </button>
      <h2>Digite o que você ouviu</h2>
      <input type="text" placeholder="Digite o que você ouviu"/>
      <button onClick={Verificar}>Verificar</button>
    </div>
  );
}

export default App;
