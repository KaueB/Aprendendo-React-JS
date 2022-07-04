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
    
    const [formatResult, setResult] = useState("Preencha os dados acima para ver o resultado!");
    const [photo, setPhoto] = useState();
    
    let male, female 
    let [maleValue, setMaleValue] = React.useState(true)
    let [femaleValue, setFemaleValue] = React.useState(false)
    let [setGenre] = React.useState(male)

    let handleMale = () => {
        setMaleValue(true)
        setFemaleValue(false)
        setGenre(male)
    };
        
    let handleFemale = () => {
        setMaleValue(false)
        setFemaleValue(true)
        setGenre(female)
    };

    let date = new Date()
    let year = date.getFullYear()

    let getYear = 2004 // testando, irei mudar depois
    let ages = year - getYear

    function check() {  
        if ( setGenre === male ) {
            setResult('teste')
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
        } else if ( setGenre === female){
            setResult('teste')
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
    }

    return (
        <div id='YearsOld'>
            <header>
                <h1>Vamos descubrir quantos anos você tem.</h1>
            </header>
            <section>
                <div>
                    <p>Ano de Nascimento: 
                        <input type="number" name="textOfTheYear" id="textOfTheYear" min="0"/>
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
                <div id = "result">
                    {formatResult}
                    <img src={photo} alt="" />
                </div>
            </section>
        </div>
    );
} 

export default YearsOld;