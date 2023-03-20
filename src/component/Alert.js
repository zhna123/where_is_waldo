import { useEffect, useRef } from "react"
import XMARK from '../images/xmark.png'

function Alert({ character, showAlert }) {

    const alertRef = useRef(null);

    useEffect(() => {

        const alertElement = alertRef.current;

        const handleClickOutside = (e) => {
            if (alertElement && !alertElement.contains(e.target)) {
                showAlert(false)
            }
        }

        if (alertElement) {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            }
        }

    })

    return (
        <>
        <div className="popup_overlay"></div>
        <div ref = {alertRef} className="alert">
            <img src={ XMARK } alt=''></img>
            <div>
                { character } is not within selection!
            </div>
        </div>
        </>     
    )
}

export default Alert