//import react
import React from 'react';
// import ReactDOM from 'react-dom';
import {render} from 'react-dom';

//import components
import Playlist from './components/playlist';
// import Media from './components/media-estiloslinea'

import data from '../src/api.json';

//import imagen

const app = document.getElementById('app');

render( <Playlist
            data={data}
        />, app);