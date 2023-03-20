import '../styles/styles.css'
import { Link } from 'react-router-dom';
import START from '../images/start-page.png'

function GameStart() {
    return (
        <div className="startContainer">
            <h3>Find waldo and other characters online</h3>
            <Link to='/gameboard'>
                <button>START GAME</button>
            </Link>
            <img src={ START } alt=""></img>
        </div>
    )
}

export default GameStart;