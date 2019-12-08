//import react
import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom'

//import components
import Media from './components/media'
// import Media from './components/media-estiloslinea'

const app = document.getElementById('app');

render(<Media 
            title="¿Que es Responsive Design?"
            author="Guillermo Royo"
            video="https://picsum.photos/200/300"
        /> , app);