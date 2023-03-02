import { storage } from '../utils/firebase'
import { ref, getDownloadURL } from 'firebase/storage'
import { useEffect, useState } from 'react'
import '../styles/styles.css'


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


    function generateImageGrids() {
        const imageGrids = Array(10).fill().map(() => Array(10).fill());
        return imageGrids
    }

    function generateGrids() {
        const imageGrids = generateImageGrids();
        console.log(imageGrids)
        // each item is an array as well
        const generated = imageGrids.map(item => (
            <div className='colDivide'>
                {item.map(i => (
                    <div className='rowDivide'></div>
                ))}
            </div>
        ))
        return generated;
    }
  
    return (
        <div className='gameContainer'>
            <p>Where's Waldo</p>
            <div className='imageContainer'>
                <img src={ url } alt='' />
                <div className='overlay'>
                    { generateGrids() }
                </div>
            </div>
        </div>
    )
}

export default GameBoard;