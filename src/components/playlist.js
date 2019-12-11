import React, {Component} from 'react';

//import de componentes
import Media from './media';

//import de estilos
import './styles/playlist.css'

class Playlist extends Component{
    render(){
        const playlist = this.props.data.categories[0].playlist
        const playlist2 = this.props.data.categories[1].playlist
        const fiveStars = this.props.data.categories[2].playlist
        console.log(this.props.data.categories[0].playlist[0].cover)
        return(
            <>
            <h2> Recomendados </h2>

            <div className="Playlist">
                {
                    playlist.map((item)=> {
                        return  <Media 
                        {...item}
                        key={item.id}
                        />
                    })
                }
            </div>

            <h2> Favoritos </h2>
            
            <div className="Playlist">
                {
                    playlist2.map((item)=> {
                        return  <Media 
                                    {...item}
                                    key={item.id}
                                />
                    })
                }
            </div>
            <h2> Mas votados </h2>
            
            <div className="Playlist">
                {
                    fiveStars.map((item)=> {
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
}

export default Playlist;





function Playlist() {
    return (
        <h1> Hola </h1>
    )
}