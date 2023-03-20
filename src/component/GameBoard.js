import { storage } from '../db/firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { useEffect, useRef, useState } from 'react'
import '../styles/styles.css'
import ImageOverlay from './ImageOverlay';
import Timer from './Timer';
import GameOver from './GameOver';
import { Link } from 'react-router-dom';

function GameBoard() {

    const [url, setUrl] = useState('');
    const [totalMarks, setTotalMarks] = useState(0)
    const [timeUsed, setTimeUsed] = useState(0)
    const timerOverlayRef = useRef(null);

    const allMarks = 5

    useEffect(() => {
      (async () => {
        try {
          const resp = await getDownloadURL(ref(storage, 'images/waldo.jpeg'));
          setUrl(resp)
        } catch (err) {
          console.log('error downloading image...')
        }
      })()
    }, []);

    function incTotalMarks() {
      setTotalMarks(totalMarks + 1)
    }

    const recordTotalTimeUsed = (timeUsed) => {
      setTimeUsed(timeUsed)
    }

    const showGameBoard = () => {
      return (
        <>
        <div className='gameContainer'>
            <div className='imageContainer'>
                <img src={ url } alt='' />
                <ImageOverlay incTotalMarks = { incTotalMarks }/>
                <div ref = { timerOverlayRef } className="timer_overlay" />
            </div>
            <Timer timerOverlayRef = { timerOverlayRef } recordTotalTimeUsed = { recordTotalTimeUsed } />
        </div>
        <div className='controlBtns'>
          <Link to='/'>
            <button>QUIT</button>
          </Link>
        </div>
        </>
      )
    }

    return (
      <>
        
      { totalMarks === allMarks ? <GameOver timeUsed = { timeUsed }/> : showGameBoard() }

      </>      
    )
}

export default GameBoard;