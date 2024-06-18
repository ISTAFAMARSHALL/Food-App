export default function IamgePicker(props) {
    return (
        <>
            <div className={classes.picker}>
                <label htmlFor={props.name} >{props.label}</label>
                <div className={classes.controls} >
                    <input 
                    type="file" 
                    id={props.name}
                    accept="image/png, image/jpeg" 
                    name={props.name}
                    />
                </div>
            </div>
        </>
    )
}