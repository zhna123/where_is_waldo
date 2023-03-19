import { useEffect, useRef } from "react"

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
            { character } is not within selection!
        </div>
        </>     
    )
}

export default Alert