import React, { useState } from 'react';

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
    const [photo, setPhoto] = useState(null);

    const [currentRadioValue, setCurrentRadioValue] = useState(null)
    const e = ''
    const handleRadioChange = (e) => {
        setCurrentRadioValue(e.target.value);
    };    

    let date = new Date()
    let year = date.getFullYear()

    let getYear = 2004 // testando, irei mudar depois
    let ages = year - getYear

    function check() {  
        if ( e.target.value === 'radioMale' ) {
            setResult('teste')
            if(ages < 10) {
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
        } else if ( e.target.value === 'radioFemale' ){
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
        <div>
            <header>
                <h1>Vamos descubrir quantos anos você tem.</h1>
            </header>
            <section>
                <div>
                    <p>Ano de Nascimento: 
                        <input type="number" name="textOfTheYear" id="textOfTheYear" min="0"/>
                    </p>
                    <p>Sexo: 
                        <input
                            id="radioMale"
                            name="radioMale"
                            type="radio"
                            value="radioMale"
                            onChange={handleRadioChange}
                            checked={currentRadioValue === 'radioMale'}
                        />
                        <label for="mas">Masculino</label>
                        <input
                            id="radioFemale"
                            name="radioFemale"
                            type="radio"
                            value="radioFemale"
                            onChange={handleRadioChange}
                            checked={currentRadioValue === 'radioFemale'}
                        />
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