import axios from 'axios';
import Game from './Game'
import './styles/main.scss'

function init (){
    // se hace la llamada a la API de las banderas
    axios.get("https://restcountries.eu/rest/v2/all")
        .then(response =>{
            console.log(response.data);
            const game = new Game(response.data);
            game.start();
        })
        .catch(error=>console.log(error));
    
    
}
init();








const button =document.getElementById('dark-mode');
button.addEventListener('click', ()=>{
        const body =document.getElementById("body")
        body.classList.toggle("dark-mode")
        
  
})