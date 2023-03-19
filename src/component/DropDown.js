import '../styles/styles.css'
import WALDO from '../images/waldo.png'
import WOOF from '../images/woof.png'
import WENDA from '../images/wenda.png'
import WIZARD from '../images/wizard-whitebeard.png'
import ODLAW from '../images/odlaw.png'
import { verifyCharacter } from '../db/db'

function DropDown({ grid, markCorrectGrid, notifyIncorrectGrid }) {


    const handleMenuClick = async (character) => {
        const foundCharacter = await verifyCharacter(character, grid.colValue, grid.rowValue)
        if (foundCharacter) {
            markCorrectGrid()   
        } else {
            notifyIncorrectGrid(character)
        }
    }

    return (
        <div className='targetBox'>
            <div className='dropDown'>
                <ul>
                    <li onClick={ () => handleMenuClick('waldo') }>
                        <img src={ WALDO } alt=""/>
                        <span> Waldo </span>
                    </li>
                    <li onClick={ () => handleMenuClick('woof') }>
                        <img src={ WOOF } alt=""/>
                        <span> Woof </span>
                    </li>
                    <li onClick={ () => handleMenuClick('wenda') }>
                        <img src={ WENDA } alt=""/>
                        <span> Wenda </span>
                    </li>
                    <li onClick={ () => handleMenuClick('wizard') }>
                        <img src={ WIZARD } alt=""/>
                        <span> Wizard Whitebeard </span>
                    </li>
                    <li onClick={ () => handleMenuClick('odlaw') }>
                        <img src={ ODLAW } alt=""/>
                        <span> Odlaw </span>
                    </li>           
                </ul>
            </div>
        </div>    
    )
}

export default DropDown