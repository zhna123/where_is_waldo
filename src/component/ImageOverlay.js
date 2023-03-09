import { useRef } from 'react';
import GridItem from '../db/GridItem';
import '../styles/styles.css'
import OverlayGrid from './OverlayGrid';

function ImageOverlay({ incTotalMarks }) {

    const overlayRef = useRef(null);

    function generateImageGrids() {
        const imageGrids = Array(10).fill().map(() => Array(10).fill());
        return imageGrids
    }

    function generateGrids() {
        const imageGrids = generateImageGrids();
        // each item is an array as well
        const generated = imageGrids.map((item, index) => (
            <div key={ index } className='colDivide'>
                {item.map((i, ind) => {
                    const grid = new GridItem(index, ind)
                    return (
                            <OverlayGrid key={ ind } grid = { grid } 
                                    incTotalMarks = { incTotalMarks }/>                      
                        )
                })}
            </div>
        ))
        return generated;
    }

    return (
        <div ref={ overlayRef } className='overlay'>
            { generateGrids() }
        </div>
    )
}

export default ImageOverlay;