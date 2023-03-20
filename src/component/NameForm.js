
import { useRef, useEffect } from "react";
import { addToCollection } from "../db/db";

function NameForm({ closeForm, time, formSubmitted }) {

    const formRef = useRef(null);
    const inputRef = useRef(null);
    const checkboxRef = useRef(null);

    useEffect(() => {

        const formElement = formRef.current;

        const handleClickOutside = (e) => {
            if (formElement && !formElement.contains(e.target)) {
                closeForm();
            }
        }

        if (formElement) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }

    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());

        const anonymous = formJson.anonymousCheckbox === 'on' ? true : false;
        let nameInput = anonymous ? 'Anonymous' : formJson.nameInput;
        const docRef = await addToCollection(nameInput, time)
        if (docRef.id) {
            console.log("Document written with ID: ", docRef.id)
            formSubmitted();
            closeForm()
        } else {
            console.log("failed writing doc")
        }
    }

    const checkboxOnChange = () => {
        const inputElement = inputRef.current;
        const checkboxElement = checkboxRef.current;
        if (checkboxElement.checked) {
            inputElement.value = ''
            inputElement.disabled = true;
        } else {
            inputElement.disabled = false;
        }
    }

    return (
        <>
        <div className="popup_overlay"></div>
        <div className="nameForm" ref={ formRef }>
            <form method="post" onSubmit={ handleSubmit } >
                <p>Please enter your name:</p>
                <label>
                    Name: <input ref={ inputRef } type="text" name="nameInput" />
                </label>
                <label>
                    Stay Anonymous: <input ref={ checkboxRef } type="checkbox" name="anonymousCheckbox" onChange={ checkboxOnChange }/>
                </label>
                <button type="submit">submit</button>
            </form>
        </div>
        
        </>
    )
}

export default NameForm