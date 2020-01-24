import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    minWidth: 150
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function LeadCard(props) {
  const classes = useStyles();
  
  // function showProps(){
  //   console.log(props.lead.created_at)
  // }

  // showProps()



  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <Card 
    className={classes.card} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h3">
        {props.lead.company}
        </Typography>

        <Typography variant="body2" component="h4">
        {props.lead.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => props.handleCardClick(props.lead)}
          size="small">SEE DEETS
        </Button>
      </CardActions>
    </Card>
  );
}
