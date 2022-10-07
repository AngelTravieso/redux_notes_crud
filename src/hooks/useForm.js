import { useEffect, useMemo, useState } from "react";


export const useForm = ( initialForm = {}, formValidations = {} ) => {

    const [formState, setFormState] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [ formState ]);

    
    const isFormValid = useMemo(() => {
        for(const formValue of Object.keys( formValidation )) {
            if(formValidation[formValue] !== null) return false;   
        }
    }, [ formValidation ]);

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value,
        });
    }

    const createValidators = () => {

        const obj = {};

        for(const formField of Object.keys(formValidations)) {
            const [ fn, errorMessage ] = formValidations[formField];
            obj[`${formField}Valid`] = fn( formState[formField] ) ? null : errorMessage;
            setFormValidation(obj);
        }
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }


    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        isFormValid,

        ...formValidation,
    }

}