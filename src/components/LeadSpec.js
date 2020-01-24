import React from "react";
import { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";
import { Fragment } from "react";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
// import AddIcon from '@material-ui/icons/Add';
import EditIcon from "@material-ui/icons/Edit";
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function Leadspec(props) {
  useEffect(() => {
    getLeadNotes();
  }, []);

  const API = "http://localhost:3000/notes";

  const [data, setData] = useState([]);

  let getLeadNotes = () => {
    fetch(API)
      .then(res => res.json())
      .then(data => {
        setData(data.filter(note => note.lead_id === props.lead.id));
      });
  };

  const [clicked, setClicked] = useState(false);
  const classes = useStyles();

  let handleAddNoteClick = () => {
    setClicked(!clicked);
  };

  return (
    <Fragment>
      <div></div>
      <Fab
        onClick={() => props.handleCardClick()}
        color="primary"
        aria-label="add"
      >
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

      <Fab
        onClick={() => handleAddNoteClick()}
        color="secondary"
        variant="extended"
        aria-label="edit"
      >
        <EditIcon className={classes.extendedIcon} />
        Add a note
      </Fab>
      {clicked === true ? (
        <div>
          <NoteForm leadId={props.lead.id} getLeadNotes={getLeadNotes} />
        </div>
      ) : (
        <div></div>
      )}
      <h3>Your notes: </h3>
      {data.map(leadNote => (
        <NoteCard id={leadNote.id} note={leadNote} />
      ))}
    </Fragment>
  );
}
