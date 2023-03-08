import { useEffect, useRef, useState } from 'react';
import '../styles/styles.css'
import DropDown from './DropDown';

function OverlayGrid({ grid }) {

    const gridRef = useRef(null);
    const [open, setOpen] = useState(false);
    const [marked, setMarked] = useState(false);

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
    }

    const notifyIncorrectGrid = () => {
        // TODO dont use alert here
        alert('selection is incorrect');
        setOpen(false)
    }

    return (
        <div ref = { gridRef } className='rowDivide' onClick={ clickGridHandler }>
            { open && 
                <DropDown grid = { grid } 
                        markCorrectGrid = { markCorrectGrid }
                        notifyIncorrectGrid = { notifyIncorrectGrid }/>
            }
        </div>
    )
}

export default OverlayGrid;