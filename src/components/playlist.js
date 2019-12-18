import React from 'react';

//import de componentes
import Media from './media';

//import de estilos
import './styles/playlist.css';

import Play from '../components/icons/play';
import Pause from '../components/icons/pause';
import Volumen from './icons/volumen';
import FullScreen from './icons/fullScreen';

function Playlist (props){
    
    const playlist = props.data.categories[0].playlist
    console.log(props.data.categories[0].playlist[0].cover)
    return(
        <>
        <div className="Playlist">
            <Play
                size={25}
                color="rgb(70,70,70)"
            />
            <Volumen
                size={23}
                color="rgb(70,70,70)"
            />
            <Pause
                size={25}
                color="rgb(70,70,70)"
            />
            <FullScreen
                size={21}
                color="rgb(70,70,70)"
            />
            {
                playlist.map((item)=> {
                    return  <Media 
                    {...item}
                    key={item.id}
                    />
                })
            }
        </div>

        </>
    )
}

export default Playlist;


