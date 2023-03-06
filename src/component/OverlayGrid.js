import { useEffect, useRef, useState } from 'react';
import '../styles/styles.css'
import DropDown from './DropDown';

function OverlayGrid({ grid }) {

    const gridRef = useRef(null);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onClickFunction = () => {
            setOpen(true)
        }
        const currentNode = gridRef.current;
        if (currentNode) {
            currentNode.addEventListener("click", onClickFunction)
            return () => {
                currentNode.removeEventListener("click", onClickFunction);
            }
        }
    }, [open])
    
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

    return (
        <div ref = { gridRef } className='rowDivide' >
            { open && 
                <DropDown />
            }
        </div>
    )
}

export default OverlayGrid;