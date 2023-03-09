import { storage } from '../db/firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'
import '../styles/styles.css'
import ImageOverlay from './ImageOverlay';
import Timer from './Timer';


function GameBoard() {

    const [url, setUrl] = useState('');
    const [totalMarks, setTotalMarks] = useState(0)

    function incTotalMarks() {
      setTotalMarks(totalMarks + 1)
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
  
    return (
        <div className='gameContainer'>
            <p>Where's Waldo</p>
            <div className='imageContainer'>
                <img src={ url } alt='' />
                <ImageOverlay incTotalMarks = { incTotalMarks }/>
            </div>
            <Timer totalMarks = { totalMarks }/>
        </div>
    )
}

export default GameBoard;