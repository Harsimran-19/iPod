import React from 'react';

const styles = {
    artistsContainer : {
        height : '100%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
    },
    imageContainer : {
        height : '90%',
        width : '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignSelf : 'center'
    },
    image : {
        width: '65%',
        height : '100%',
        marginLeft:'6vh'
    },
    info : {
        height : '65%',
        width : '100%',
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems:'center',
        marginTop:'30px'
    },
    titleBar : {
        height:'10%',
        width:'96%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '30px',
        height: '30px',
    }
}

class Artist extends React.Component{
    
    render(){
        return(
            <div style={styles.artistsContainer}>

                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src={"https://img.icons8.com/ios-glyphs/90/000000/full-battery.png"}></img>
                    </div>

                <div style={styles.info}>
                    <div style={styles.imageContainer}>
                    <img src="https://clipart.world/wp-content/uploads/2021/05/Theatre-Mask-clipart-transparent.png" alt="" style={styles.image} />
                    
                    </div>
                    <h1>Artists</h1>
                    
                    
                </div>
            </div>
        );
    }
    
}



export default Artist;