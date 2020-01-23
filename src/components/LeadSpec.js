import React from 'react'
import { Fragment } from 'react'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
// import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },

  }));
  
  



export default function Leadspec(props) {
    const classes = useStyles();

        return (
            <Fragment>
                <div></div>
            <Fab
                onClick={() => props.handleCardClick()}
                color="primary"
                aria-label="add">
                <HomeSharpIcon />
            </Fab>
            
            {/* <Fab variant="extended">
              <NavigationIcon  />
              Navigate
            </Fab>
            <Fab disabled aria-label="like">
              <FavoriteIcon />
            </Fab> */}
        
        <div>     
             <h1>Job Title: {props.lead.title}</h1>
             <h2>Company: {props.lead.company}</h2>
             <h3>Location: {props.lead.location}</h3>
             <h3>Description: {props.lead.description}</h3>
            </div>
            
            <Fab color="secondary" variant="extended" aria-label="edit">
              <EditIcon className={classes.extendedIcon}/>
              Add a note
            </Fab>
            </Fragment>

          
        )
    
}
