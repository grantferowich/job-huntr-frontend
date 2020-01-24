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


    let createDate = () => {
      const date = props.note.created_at.split("-")
      let year = date[0]
      let month = date[1]
      let day = date[2].split("")
      day.splice(2)
      let newDate = day.join('')
      const fullDate = `${month}/${newDate}/${year}`
      return fullDate
        }

      


        
      return (
               <Card 
    className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3">
             {props.note.content}
        </Typography>

        <Typography variant="body4" component="h6">
            Created at {createDate()}
        </Typography>
      </CardContent>
 </Card>
           
        )
}

