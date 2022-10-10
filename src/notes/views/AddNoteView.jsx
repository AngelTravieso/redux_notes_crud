import { Box, Button, Grid, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useForm } from "../../hooks/useForm"
import { addNewEmptyNote, savingNewNote, startNewNote } from "../../store"

import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';

moment.locale('es');
const myDate = moment();

const formData = {
    note: '',
}

const formValidation = {
    note: [ (value) => value.length >= 3, 'La nota debe contener mínimo 3 letras.'],
}

export const AddNoteView = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);




    const dispatch = useDispatch();

    const { 
        formState, note,
        isFormValid, noteValid,
        onInputChange, onResetForm,
    } = useForm( formData, formValidation );


    const onAddNote = ( evt ) => {
        evt.preventDefault();
        setFormSubmitted(true);

        if(!isFormValid) return;

        // Datos nota
        const newNote = {
            id: uuidv4(),
            title: note,
            date: myDate.format('llll'),
        }

        onResetForm();

        setFormSubmitted(false);

        dispatch( startNewNote( newNote ) )

    }

  return (
    <Box sx={{ padding: 4 }}>
        <form onSubmit={ onAddNote }>
            <Grid item sx={{ mb: 5 }}>
                <Typography variant="h4">Agregar Nota</Typography>
            </Grid>

            <Grid item sx={{ mb: 5 }}>
                <TextField
                    variant="filled"
                    label="título"
                    name="note"
                    autoComplete="off"
                    value={ note }
                    onChange={ onInputChange }
                    error={ !!noteValid  && formSubmitted }
                    helperText={ noteValid }
                    fullWidth
                />
            </Grid>
            
            <Grid item>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                >
                    Agregar Nota
                </Button>
            </Grid>
        </form>

    </Box>
  )
}
