import { storage } from '../db/firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'
import '../styles/styles.css'
import ImageOverlay from './ImageOverlay';


function GameBoard() {

    const [url, setUrl] = useState('');

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
                <ImageOverlay />
            </div>
        </div>
    )
}

export default GameBoard;