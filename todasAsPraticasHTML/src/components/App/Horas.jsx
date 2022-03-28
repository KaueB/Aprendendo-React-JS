import React, { useState, useEffect} from 'react'

import '../../App.css';
import madrugada from "../img/manha.png";
import manha from "../img/manha.png";
import tarde from "../img/tarde.png";   
import noite from "../img/noite.png";

function Horas() {
    
    useEffect( () => {
        setInterval(() => {
            let hoje = window.document.getElementById('hoje')
        
            const now = new Date();
            const mName = now.getMonth() +1;
            const dName = now.getDay() +1;
            const dayNr = now.getDate();
            const yearNr = now.getYear();
            let Day = ""
            let Month = ""
            let Year = ""
    
            if(dName===1) Day = "Domingo";
            if(dName===2) Day = "Segunda-feira";
            if(dName===6) Day = "Sexta-feira";
            if(dName===7) Day = "Sábado";
            if(mName===1) Month = "Janeiro";
            if(mName===2) Month = "Fevereiro";
            if(mName===3) Month = "Março";
            if(mName===4) Month = "Abril";
            if(mName===5) Month = "Maio";
            if(mName===6) Month = "Junho";
            if(mName===7) Month = "Julho";
            if(mName===8) Month = "Agosto";
            if(mName===9) Month = "Setembro";
            if(mName===10) Month = "Outubro";
            if(mName===11) Month = "Novembro";
            if(mName===12) Month = "Dezembro";
            if(yearNr < 2000) {Year = 1900 + yearNr;}
    
            else {Year = yearNr;}
    
            /* var todaysDate = (" " + Day + ", " + dayNr + "/" + Month + "/" + Year); */
          
            hoje.innerHTML = (" " + Day + ", " + dayNr + "/" + Month + "/" + Year)
    

            var agora = document.getElementById("agora")
            // var hoje = new Date()
            var horas = hoje.getHours()
      
            if ( horas < 10){
                horas = "0"+horas
            }

            var minutos = hoje.getMinutes()

            if (minutos < 10) {
                minutos = "0"+minutos 
            }

            var segundos = hoje.getSeconds()

            if (segundos < 10) {
                segundos = '0'+segundos
            }

            agora.innerHTML = `<div> horas + ":" + minutos + ":" + segundos </div>` // horas + ":" + minutos + ":" + segundos
        }, 1000);
    }, []);

    /* Teste
    
    function data() { // Data de hoje
        let hoje = window.document.getElementById('hoje')
        
        const now = new Date();
        const mName = now.getMonth() +1;
        const dName = now.getDay() +1;
        const dayNr = now.getDate();
        const yearNr = now.getYear();
        let Day = ""
        let Month = ""
        let Year = ""

        if(dName===1) Day = "Domingo";
        if(dName===2) Day = "Segunda-feira";
        if(dName===6) Day = "Sexta-feira";
        if(dName===7) Day = "Sábado";
        if(mName===1) Month = "Janeiro";
        if(mName===2) Month = "Fevereiro";
        if(mName===3) Month = "Março";
        if(mName===4) Month = "Abril";
        if(mName===5) Month = "Maio";
        if(mName===6) Month = "Junho";
        if(mName===7) Month = "Julho";
        if(mName===8) Month = "Agosto";
        if(mName===9) Month = "Setembro";
        if(mName===10) Month = "Outubro";
        if(mName===11) Month = "Novembro";
        if(mName===12) Month = "Dezembro";
        if(yearNr < 2000) {Year = 1900 + yearNr;}

        else {Year = yearNr;}

        var todaysDate = (" " + Day + ", " + dayNr + "/" + Month + "/" + Year);
      
        hoje.innerHTML = todaysDate 

    }  window.setInterval('data()',1000)  */
      
    function carregar() { // Bom dia - Boa tarde - Boa noite 
        var img = window.document.getElementById('imagem')
        var titulo = window.document.getElementById('bom dia')
      
        var agora = new Date()
        var HorasC = agora.getHours()
      
        if (HorasC >= 0 && HorasC < 6 ) {
            // Madrugada
            img.src = {madrugada}
            titulo.innerHTML = "Madrugada"
            document.body.style.background = '#331a38'
        } else if (HorasC >= 0 && HorasC < 12) {
            // Bom dia 
            img.src={manha}
            titulo.innerHTML = "Bom Dia"
            document.body.style.background = '#cfa83bef'
        } else if (HorasC >= 12 && HorasC < 18 ){
            // Boa tarde 
            img.src = {tarde}
            titulo.innerHTML = "Boa Tarde"
            document.body.style.background = '#866254'
        } else {
            // Boa noite 
            img.src = {noite}
            titulo.innerHTML = "Boa Noite"
            document.body.style.background = '#274266'
        }
    }
      
    /* function Horario(){  // Horário, depois eu ativo
        var agora = document.getElementById("agora")
        var hoje = new Date()
        var horas = hoje.getHours()
      
        if ( horas < 10){
            horas = "0"+horas
        }

        var minutos = hoje.getMinutes()

        if (minutos < 10) {
            minutos = "0"+minutos 
        }

        var segundos = hoje.getSeconds()

        if (segundos < 10) {
            segundos = '0'+segundos
        }

        agora.innerHTML = (horas + ":" + minutos + ":" + segundos)
    } window.setInterval("Horario()",1000)  */

    return (
        <div onload={() => this.carregar()}>
            <header>
                <h1 className='hoje'>Dia da Semana Dia/Mês/Ano</h1>
                <h1 id='bom dia'>Hora do dia</h1>
            </header>
            <section>
                <div id = "agora">
                    00:00:00
                </div>
                <div id='foto'>
                    <img id = 'imagem' src={manha} alt="Foto do dia"/>
                </div>
                {/* <input type="button" value="botao" onClick={data()} /> */}
                {/* <input type="button" value="botao" onClick={carregar()} />  */}
                {/* <input type="button" value="botao" onClick={Horario()} /> */}
            </section>
        </div>
    );
}

export default Horas;