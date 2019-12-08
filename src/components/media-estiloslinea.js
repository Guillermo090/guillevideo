import React, {Component} from 'react';


class Media extends Component {
    render(){
        const styles = {
            container: {
                fontSize : 14,
                backgroundColor : 'red',
                color: 'white',
                display : 'flex',
                flexDirection : 'column',
                width : 250,
                padding : 10
            },
            img: {
                borderRadius : 10,
                width: 100
            }
        }

        return (
            <div style={styles.container}>
                <img style={styles.img}
                    src={this.props.video}
                    alt="media"
                    // width={260}
                    // height={160}
                />
                <h3>Titulo</h3>
                <p> Texto bajo imagen</p>

            </div>
        )
    }
}

export default Media;