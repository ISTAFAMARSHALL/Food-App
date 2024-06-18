'use client'
import { useRef, useState } from 'react';

import classes from './image-picker.module.css'
import Image from 'next/image';

export default function IamgePicker(props) {

    const [pickedImage , setPickedImage] = useState();

    const imageInput = useRef();

    function handleIamgeClick () {
        imageInput.current.click();
    }

    function handleImagechange(event) {
        const file = event.target.files[0]
        console.log(file)

        if (!file) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = () => {
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);
    }

    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={props.name} >{props.label}</label>
                <div className={classes.controls} >
                    <div className={classes.preview} >
                        {!pickedImage && <p>No image picked yet</p>}
                        {pickedImage && (
                            <Image
                            src={pickedImage}
                            alt="The image selected by the user."
                            fill
                            />
                        )}
                    </div>
                    <input
                    className={classes.input}
                    type="file" 
                    id={props.name}
                    accept="image/png, image/jpeg" 
                    name={props.name}
                    ref={imageInput}
                    onChange={handleImagechange}
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