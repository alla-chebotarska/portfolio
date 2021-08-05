import React from 'react';

import Paper from '@material-ui/core/Paper';


import Image from '../../img/banner.jpg'; // Import using relative path


const styles = {
    paperContainer: {
        backgroundImage: `url(${Image})`,
        height: "100vh",
        width: '100%',
    }
};

export default class Banner extends React.Component{
    render(){
        return(
            <Paper style={styles.paperContainer}>
                Some text to fill the Paper Component          
            </Paper>
        )
    }
}
