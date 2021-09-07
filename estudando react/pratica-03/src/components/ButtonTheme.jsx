import React from 'react';

import './componentsStyle/ButtonTheme.css';

const ButtonTheme = () => {

    /* 
    var checkboxF = document.querySelector('input[name=theme]');

    checkboxF.addEventListener('change', function() {
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
    */

    return (
            <div className="toggle">
                <input id="switch" type="checkbox" name="theme"></input>
                <label for="switch">Toggle</label>
            </div>
    );
}
 
export default ButtonTheme;