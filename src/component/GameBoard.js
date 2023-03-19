import { storage } from '../db/firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'
import '../styles/styles.css'
import ImageOverlay from './ImageOverlay';
import Timer from './Timer';
import GameOver from './GameOver';


function GameBoard() {

    const [url, setUrl] = useState('');
    const [totalMarks, setTotalMarks] = useState(0)
    const [timeUsed, setTimeUsed] = useState(0)

    const allMarks = 5

    function incTotalMarks() {
      setTotalMarks(totalMarks + 1)
    }

    const recordTotalTimeUsed = (timeUsed) => {
      setTimeUsed(timeUsed)
    }

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

    const showGameBoard = () => {
      return (
        <div className='gameContainer'>
            <p>Where's Waldo</p>
            <div className='imageContainer'>
                <img src={ url } alt='' />
                <ImageOverlay incTotalMarks = { incTotalMarks }/>
            </div>
            <Timer recordTotalTimeUsed = { recordTotalTimeUsed }/>
        </div>
      )
    }

    return (
      <>
        { totalMarks === 1 ? <GameOver timeUsed = { timeUsed }/> : showGameBoard() }

      </>      
    )
}

export default GameBoard;