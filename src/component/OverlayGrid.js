import { useEffect, useRef, useState } from 'react';
import '../styles/styles.css'
import DropDown from './DropDown';
import Alert from './Alert';

function OverlayGrid({ grid, incTotalMarks }) {

    const gridRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [marked, setMarked] = useState(false);
    const [alert, setAlert] = useState({showAlert: false, character: ''});

    // click grid
    const clickGridHandler = () => {
        if (!open && !marked) {
            setOpen(true)
        }
    }

    // click outside grid
    useEffect(() => {
        const currentNode = gridRef.current;
        const handleClickOutside = (e) => {
            if (currentNode && !currentNode.contains(e.target)) {
                setOpen(false)
            }
        }
        if (currentNode) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }
    }, [open])

    const markCorrectGrid = () => {
        // close dropdown first
        setOpen(false);
        const element = gridRef.current;
        element.classList.add('markedGrid');
        setMarked(true)
        incTotalMarks()
    }

    const notifyIncorrectGrid = (character) => {
        setAlert({showAlert: true, character: character})
        setOpen(false)
    }

    const setShowAlert = (show) => {
        setAlert({ ...alert, showAlert: show })
    }

    return (
        <>
        <div ref = { gridRef } className='rowDivide' onClick={ clickGridHandler }>
            { open && 
                <DropDown grid = { grid } 
                        markCorrectGrid = { markCorrectGrid }
                        notifyIncorrectGrid = { notifyIncorrectGrid }/>
            }
        </div>
        {
            alert.showAlert &&
                <Alert character={ alert.character } showAlert = {setShowAlert} />
        }
        </>
    )
}

export default OverlayGrid;