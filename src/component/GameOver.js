import { useState } from 'react';
import '../styles/game_over.css'
import NameForm from './NameForm';
import ScoreTable from './ScoreTable';
import { minuteTime, secondTime } from '../util/TimeConverter';

function GameOver({ timeUsed }) {

    const [openForm, setOpenForm] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [lastRank, setLastRank] = useState(30 * 60000);

    const formSubmitted = () => {
        setSubmitted(true);
    }

    const openNameForm = () => {
        setOpenForm(true)
    }

    const closeNameForm = () => {
        setOpenForm(false)
    }

    return (
        <div className='gameEndContainer'>
            <p>Congratulations! You've found all the characters.</p>
            <p>You used { minuteTime(timeUsed) } minutes { secondTime(timeUsed) } seconds. </p>
            {
                timeUsed > lastRank ? <div /> :
                !submitted &&
                <div className='nameFormLink' onClick={ openNameForm }>
                    Click here to enter your name for high score table.</div>
            }

            <ScoreTable submitted = { submitted } setLastRank = { setLastRank }/>

            <div className='buttons'>
                <button>PLAY AGAIN</button>
                <button>QUITE</button>
            </div>

            {openForm && 
                <NameForm closeForm = { closeNameForm } time = { timeUsed } 
                            formSubmitted = { formSubmitted }/>}

        </div>

        
    )
}

export default GameOver
