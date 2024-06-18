'use client'
import { useRef } from 'react';

import classes from './image-picker.module.css'

export default function IamgePicker(props) {

    const imageInput = useRef();

    function handleIamgeClick () {
        imageInput.current.click();
    }

    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={props.name} >{props.label}</label>
                <div className={classes.controls} >
                    <input
                    className={classes.input}
                    type="file" 
                    id={props.name}
                    accept="image/png, image/jpeg" 
                    name={props.name}
                    ref={imageInput}
                    />
                    <button className={classes.button} 
                    type='button'
                    onClick={handleIamgeClick}
                    >Pick an Image</button>
                </div>
            </div>
        </>
    )
}