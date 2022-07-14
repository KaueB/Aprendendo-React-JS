import React, { useState } from 'react';
import './style/YearsOld.css'

import RadioButton from './function/RadioButton';

import maleBabyPhoto from '../images/age/foto-bebe-m.png';
import femaleBabyPhoto from '../images/age/foto-bebe-f.png';
import photoOfYoungMale from '../images/age/foto-jovem-m.png';
import photoOfYoungFemale from '../images/age/foto-jovem-f.png';
import maleAdultPhoto from '../images/age/foto-adulto-m.png';
import femaleAdultPhoto from '../images/age/foto-adulto-f.png';
import photoOfElderlyMale from '../images/age/foto-idoso-m.png';
import photoOfElderlyFemale from '../images/age/foto-idoso-f.png';

function YearsOld() {
    
    const [formatResult, setFormatResult] = useState("Preencha os dados acima para ver o resultado!");
    const [photo, setPhoto] = useState();
    
    const [maleValue, setMaleValue] = useState(true)
    const [femaleValue, setFemaleValue] = useState(false)
    const [genre, setGenre] = useState('homem')

    let [getYear, setGetYear] = useState(null)

    function handleMale() {
        setMaleValue(true)
        setFemaleValue(false)
        setGenre('homem')
    };
        
    function handleFemale() {
        setMaleValue(false)
        setFemaleValue(true)
        setGenre('mulher')
    };

    let date = new Date()
    let year = date.getFullYear()
    let ages = year - getYear

    function check() {  
        if (getYear <= 0 || getYear > year) {
            window.alert('Verifique os dados e tente novamente')
        } else {
            if ( maleValue === true ) {
                if(ages >=0 && ages < 10) {
                    //criança
                    setPhoto(maleBabyPhoto)
                } else if (ages <21) {
                    //jovem
                    setPhoto(photoOfYoungMale)
                } else if (ages < 50) {
                    // adulto
                    setPhoto(maleAdultPhoto)
                } else {
                    // idoso
                    setPhoto(photoOfElderlyMale)
                }
            } else if ( femaleValue === true) {
                if(ages >=0 && ages < 10) {
                    //criança
                    setPhoto(femaleBabyPhoto)
                } else if (ages <21) {
                    //jovem
                    setPhoto(photoOfYoungFemale)
                } else if (ages < 50) {
                    // adulto
                    setPhoto(femaleAdultPhoto)
                } else {
                    // idoso
                    setPhoto(photoOfElderlyFemale)
                }
            }
            setFormatResult(`Detectamos ${genre} ${ages} com anos`)
        }
    }

    return (
        <div id={'YearsOld'}>
            <header>
                <h1>Vamos descubrir quantos anos você tem.</h1>
            </header>
            <section>
                <div>
                    <p>Ano de Nascimento: 
                        <input type="number" min={0} defaultValue={0} onChange={e => setGetYear(e.target.value)}/>
                    </p>
                    <p>Sexo: 
                        <RadioButton label="" value={maleValue} onChange={handleMale}/>
                        <label for="mas">Masculino</label>
                        <RadioButton label="" value={femaleValue} onChange={handleFemale}/>
                        <label for="fem">Feminino</label>   
                    </p>
                    <p>
                        <input type="button" value="Verificar" onClick={check}/>
                    </p>
                </div>
                <div id={'result'}>
                    <p>{formatResult}</p>
                    <img src={photo} alt=""/>
                </div>
            </section>
        </div>
    );
} 

export default YearsOld;