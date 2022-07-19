import React from "react";

import ComponenteUm from "./components/ComponenteUm";
import ComponenteDois from "./components/ComponenteDois";
import ComponenteTres from "./components/ComponenteTres";
import ComponenteQuatro from "./components/ComponenteQuatro";
import ComponenteCinco from "./components/ComponenteCinco";
import ComponenteSeis from "./components/ComponenteSeis";
import ComponenteSete from "./components/ComponenteSete";

import Lorem from './components/componentsText/Lorem'

import './App.css'

function App() {
    return (
        <>
            <ComponenteSete titulo='Componente sete'/>
            <ComponenteSeis titulo='Componente seis' />
            <ComponenteQuatro titulo='Componente Quatro'>
                <ComponenteCinco />
                <ComponenteCinco />
                <ComponenteCinco />
            </ComponenteQuatro>
            <ComponenteTres titulo='teste' subtitulo='Texto do Componente Três'/>
            <ComponenteDois />
            <ComponenteUm titulo='Componente Um' autor='Kauê'>
                <Lorem />
            </ComponenteUm>
        </>
    )
}

export default App;