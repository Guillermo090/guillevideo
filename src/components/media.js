import React, {Component} from 'react';
import PropTypes from 'prop-types';
// importo css
import './styles/media.css'

class Media extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         author : props.author
    //     }
    // }
    
    state = {
        author : 'Guillermo Royo'
    }

    handleClick = (e) => { 
        // console.log(this.props.title)
        // console.log(this.props.author)
        this.setState({
            author: 'Amaya Contreras',
        })
    }
 

    render(){
        return (
            <div className="Media " onClick={this.handleClick}  > 
            
                <div className="Media-cover">
                    <img 
                        className="Media-image"
                        src={this.props.cover}
                        alt="media"
                        width={260}
                        height={160}
                        />
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author"> {this.props.author} </p>
                </div>
            </div>
        )
    }
}

Media.propTypes = {
    cover : PropTypes.string.isRequired, 
    title : PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['video','audio']),
    // title : PropTypes.string.isRequired,
    // author: PropTypes.number,
}

export default Media;