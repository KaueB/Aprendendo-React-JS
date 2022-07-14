import React from 'react';

import './componentsStyle/ButtonTheme.css'

const ButtonTheme = () => {

    var checkbox = document.querySelector('input[name=theme]');

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            trans()
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            trans()
            document.documentElement.setAttribute('data-theme', 'light')
        }
    })

    let trans = () => {
        document.documentElement.classList.add('transition');
        window.setTimeout(() => {
            document.documentElement.classList.remove('transition')
        }, 1000)
    }

    return (
        <>
            <input type="checkbox" id="switch" name="theme" />
            <label for="switch">Toggle</label>
        </>
    )
}

export default ButtonTheme;