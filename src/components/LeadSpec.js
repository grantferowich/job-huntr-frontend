import React from 'react'
import { useState, useEffect } from "react";
import NoteCard from "./NoteCard";
import NoteForm from "./NoteForm";
import StatusForm from './StatusForm'
import { Fragment } from 'react'
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import ChatBubbleSharpIcon from '@material-ui/icons/ChatBubbleSharp';

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

    const API = 'http://localhost:3000/notes'
    const [data, setData] = useState([])
    const [clicked, setClicked] = useState(false)
    const [statusClicked, setStatusClicked] = useState(false)
    const classes = useStyles();


    useEffect(() => {
        getLeadNotes()
    }, [])

   

    let getLeadNotes = () => {
        fetch(API)
        .then(res => res.json())
        .then(data => {
            setData(data.filter(note => note.lead_id === props.lead.id))
        })
    }

 




    let handleAddNoteClick = () => {
        setClicked(!clicked)
    }

    let handleChangeStatusClick = () => {
        setStatusClicked(!statusClicked)
    }

   

        return (
            <Fragment>
            
            
          
        
        <div>     
             <h1>Job Title: {props.lead.title}</h1>
             <h2>Company: {props.lead.company}</h2>
             <h3>Location: {props.lead.location}</h3>
             <h3>Description: {props.lead.description}</h3>
            </div>

            <Fab
                onClick={() => handleChangeStatusClick()}
                color="secondary"
                variant="extended"
                aria-label="edit">
                <EditIcon className={classes.extendedIcon}/>
                    Update Status
            </Fab>
            {statusClicked === true ? (
            <div>
                <StatusForm leadId={props.lead.id}/>
            </div>
          ) : (
            <div>
            </div>
          )}
            <br></br>
            <Fab
                onClick={() => handleAddNoteClick()}
                color="secondary"
                variant="extended"
                aria-label="edit">
                <ChatBubbleSharpIcon className={classes.extendedIcon}/>
                    Add a note
            </Fab>
            {clicked === true ? (
            <div>
                <NoteForm
                getLeadNotes={() => getLeadNotes}
                 leadId={props.lead.id}/>
            </div>
          ) : (
            <div>
            </div>
          )}
          <h3>Your notes: </h3>
          {data.map(leadNote => (
        <NoteCard
            id={leadNote.id}
            note={leadNote}
         />
      ))}
            </Fragment>

          
    )

        
    
}

