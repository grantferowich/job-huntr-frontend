import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    card: {
      maxWidth: 225,
      padding: 5,
      borderSpacing: 1
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  });

export default function NoteCard(props) {
      
      const classes = useStyles();
        
      return (
               <Card 
    className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3">
             {props.note.content}
        </Typography>

        <Typography variant="body2" component="h4">
            Created at {props.note.created_at}
        </Typography>
      </CardContent>
 </Card>
           
        )
}

