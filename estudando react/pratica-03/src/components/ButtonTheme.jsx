import React from 'react';
import './componentsStyle/ButtonTheme.css';

/* 
import './componentsStyle/AddTask.css';
import './componentsStyle/Button.css';
import './componentsStyle/Header.css';
import './componentsStyle/Task.css';
import './componentsStyle/TaskDetails.css'; 
*/

const ButtonTheme = () => {
    
    
    const html = document.querySelector("html")
    const checkbox = document.querySelector("input[name=theme]")

    const getStyle = (element, style) => 
        window
            .getComputedStyle(element)
            .getPropertyValue(style)


    const initialColors = {
        bg: getStyle(html, "--bg"),
        bgPanel: getStyle(html, "--bg-panel"),
        bgTasks: getStyle(html, "--bg-tasks"),
        colorHeadings: getStyle(html, "--color-headings"),
        colorText: getStyle(html, "--color-text"),
    }

    const darkMode = {
        bg: "#333333",
        bgPanel: "#434343",
        bgTasks: "#585858",
        colorHeadings: "#3664FF",
        colorText: "#B5B5B5"
    }

    const transformKey = key => 
        "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


    const changeColors = (colors) => {
        Object.keys(colors).map(key => 
            html.style.setProperty(transformKey(key), colors[key]) 
        )
    }

    checkbox.addEventListener("change", ({target}) => {
        target.checked ? changeColors(darkMode) : changeColors(initialColors)
    })

    return (
        <div className="toggle">
          <input id="switch" type="checkbox" name="theme"></input>
          <label for="switch">Toggle</label>
        </div>
    );
}
 
export default ButtonTheme;