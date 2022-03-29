/* consulta 

Este código foi feito em outra prática minha, estou refazendo em React para estudo.

function verificar() {
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    var data = new Date()
    var ano = data.getFullYear()
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')

        var idade = ano - Number(fano.value)

        var género = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            género = 'homem'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            género = 'mulher'
            if(idade >=0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade <21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade < 50) {
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${género} com ${idade} anos.`
        res.appendChild(img).style.marginTop='18px'
    }
}
*/
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
    
    let [formatResult, setResult] = useState("Preencha os dados acima para ver o resultado!");
    let [photo, setPhoto] = useState(null);

    function check() {
        setResult(<div>teste</div>);
        setPhoto(maleAdultPhoto)
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
                        <input type="radio" name="selectGender" id="mas" checked />
                        <label for="mas">Masculino</label>
                        <input type="radio" name="selectGender" id="fem" />
                        <label for="fem">Feminino</label>   
                    </p>
                    <p>
                        <input type="button" value="Verificar" onClick={check}/>
                    </p>
                </div>
                <div id = "result">
                    {formatResult}
                    <img src={photo} alt={null} />
                </div>
            </section>
        </div>
    );
}

export default YearsOld;