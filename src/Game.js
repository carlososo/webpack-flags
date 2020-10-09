class Game {

    constructor(countries){
        this.countries = countries;
        this.isOk =false;  //va a validar si el resultado es correcto o no
        this.selectedCountries =[];
    }
    generateRandomNumber(length){
        //este va a generar un numero random
        return Math.floor(Math.random()* length);
    }

    OneCountry(){//este es un getter
        //este va a devolver un pais
        const random = this.generateRandomNumber(this.countries.length);
        return this.countries[random];
    }
    choiceCountries(){
        //regresar los tres paises
        for(let i=0; i<3;i++){
            const pais = this.OneCountry();
            this.selectedCountries.push(pais);
        }
        return this.selectedCountries;
    }

    choiceWinner(){

        //devolverá el pais correcto o el ganador
        const random = this.generateRandomNumber(this.selectedCountries.length)
        return this.selectedCountries[random]
    }
    flagsFunctionality(flags, texto, respuesta, poblacion,capital){
        for (let i=0; i<3;i++){
            var img = document.createElement('img');
            img.setAttribute('src', this.selectedCountries[i].flag);
            img.setAttribute('id', this.selectedCountries[i].translations.es);
            img.addEventListener('click',(e)=>{
                e.target.id === texto.innerHTML?respuesta.innerHTML ="Correcto":respuesta.innerHTML="Incorrecto";
                e.target.id === texto.innerHTML? poblacion.innerHTML=`Population: ${this.selectedCountries[i].population}` :"";
                e.target.id === texto.innerHTML? capital.innerHTML=`Poblacion: ${this.selectedCountries[i].capital}` :"";
            })
            flags.appendChild(img);
        }
        
    }
    start(){
        // se va a encargar de cargar todo el juego
        const banderas = document.querySelector('.flags');
        banderas.innerHTML =""
        const respuesta = document.getElementById('answer');
        respuesta.innerHTML =""
        const poblacion = document.getElementById('population')
        poblacion.innerHTML =""
        const capital = document.getElementById('capital');
        capital.innerHTML =""
        const textoPais = document.getElementById('country-name')
        this.choiceCountries();
        textoPais.innerHTML=this.choiceWinner().translations.es;
        this.flagsFunctionality(banderas, textoPais, respuesta, poblacion, capital);
    }
    
}

export default Game;