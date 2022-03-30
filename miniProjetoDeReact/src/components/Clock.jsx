import React, { useState, useEffect } from 'react'

import './style/Clock.css'

import dawnImg from "../images/date/madrugada.png";
import morningImg from "../images/date/manha.png";
import noonImg from "../images/date/tarde.png";
import nightImg from "../images/date/noite.png";

function Clock() {
    const [date, setDate] = useState("Dia da Semana Dia/Mês/Ano");
    const [greeting, setGreeting] = useState("Hora do Dia");
    const [time, setTime] = useState("00:00:00");
    const [displayImg, setDisplayImg] = useState(null);

    // Intervalo de 1seg, para ficar atualizando
    useEffect(() => {
        setInterval(() => {
            const now = new Date();
            handleDate(now);
            handleGreeting(now.getHours());
            handleTime(now);
            handleDisplayImage(now.getHours());
        }, 1000);
    }, []);

    // "Domingo, 27/Março/2022"
    function handleDate(date) {
        const month = monthToString(date.getMonth() + 1);
        const weekday = weekdayToString(date.getDay() + 1);
        const dayOfMonth = date.getDate();
        const year = date.getYear() + 1900;

        setDate(` ${weekday}, ${dayOfMonth}/ ${month} /${year}`);
    }
    
    function handleGreeting(hour) {
        const timeOfDay = getTimeOfDay(hour);
        if (timeOfDay === 'Madrugada')
            setGreeting("Madrugada");
        else if (timeOfDay === 'Dia')
            setGreeting("Bom Dia");
        else if (timeOfDay === 'Tarde')
            setGreeting("Boa Tarde");
        else if (timeOfDay === 'Noite')
            setGreeting("Boa Noite");
    }

    function handleTime(date) {
        const options = { minimumIntegerDigits: 2 };
        const formattedTime = {
            hours: date.getHours().toLocaleString('pt-BR', options),
            minutes: date.getMinutes().toLocaleString('pt-BR', options),
            seconds: date.getSeconds().toLocaleString('pt-BR', options)
        };

        setTime(`${formattedTime.hours}:${formattedTime.minutes}:${formattedTime.seconds}`);
    }

    function handleDisplayImage(hour) {
        const timeOfDay = getTimeOfDay(hour);

        if (timeOfDay === 'Madrugada') {
            setDisplayImg(dawnImg);
            document.body.style.background = '#331a38';
        }
        else if (timeOfDay === 'Dia') {
            setDisplayImg(morningImg);
            document.body.style.background = '#cfa83bef';
        }
        else if (timeOfDay === 'Tarde') {
            setDisplayImg(noonImg);
            document.body.style.background = '#866254';
        }
        else if (timeOfDay === 'Noite') {
            setDisplayImg(nightImg);
            document.body.style.background = '#274266';
        }
    }

    function getTimeOfDay(hour) {
        if (hour >= 0 && hour < 6) return "Madrugada";
        if (hour >= 6 && hour < 12) return "Dia";
        if (hour >= 12 && hour < 18) return "Tarde";
        if (hour >= 18 && hour < 24) return "Noite";

        return "";
    }
    
    function weekdayToString(weekday) {
        if (weekday === 1) return "Domingo";
        if (weekday === 2) return "Segunda-feira";
        if (weekday === 3) return "Terça-feira";
        if (weekday === 4) return "Quarta-feira";
        if (weekday === 5) return "Quinta-feira";
        if (weekday === 6) return "Sexta-feira";
        if (weekday === 7) return "Sábado";

        return "";
    }
    
    function monthToString(month) {
        if (month === 1) return "Janeiro";
        if (month === 2) return "Fevereiro";
        if (month === 3) return "Março";
        if (month === 4) return "Abril";
        if (month === 5) return "Maio";
        if (month === 6) return "Junho";
        if (month === 7) return "Julho";
        if (month === 8) return "Agosto";
        if (month === 9) return "Setembro";
        if (month === 10) return "Outubro";
        if (month === 11) return "Novembro";
        if (month === 12) return "Dezembro";

        return "";
    }

    return (
        <div>
            <header> 
                <h1 id="weekDayTitle">{date}</h1>
                <h1 id="timeTitle">{greeting}</h1>
            </header>
            <section>
                <div id="clockDisplay">
                    <span>{time}</span>
                </div>
                <div id='displayImage'>
                    <img src={displayImg} alt="Foto do dia" />
                </div>
            </section>
        </div>
    );
}

export default Clock;