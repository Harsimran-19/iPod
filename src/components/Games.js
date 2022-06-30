import React from 'react';

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'55%',
        height:'80%',
        // alignSelf : 'center'
    },
    titleBar : {
        height:'10%',
        width:'100%',
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

class Games extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >
                 <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src={"https://img.icons8.com/ios-glyphs/90/000000/full-battery.png"}></img>
                    </div>
                <div style={{width : '100%' , height : '65%',display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <img style={styles.image} src="https://cdn.pixabay.com/photo/2016/10/30/23/05/controller-1784573_960_720.png" />
                    <h1>Games</h1>
                </div>
                
            </div>
        );
    }
    
}




export default Games;