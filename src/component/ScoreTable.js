import { useEffect, useState } from "react"
import { getRankingQuerySnapshot } from "../db/db"
import { minuteTime, secondTime } from "../util/TimeConverter"

function ScoreTable({ submitted, setLastRank }) {

    const [rank1, setRank1] = useState({name: '', time: 0})
    const [rank2, setRank2] = useState({name: '', time: 0})
    const [rank3, setRank3] = useState({name: '', time: 0})
    const [rank4, setRank4] = useState({name: '', time: 0})
    const [rank5, setRank5] = useState({name: '', time: 0})

    useEffect(() => {
        (async () => {
            const querySnapshot = await getRankingQuerySnapshot()
            // convert to js array (firestore foreach doesn't return index)
            querySnapshot.docs.forEach((doc, index) => {
                const obj = doc.data();
                console.log(index, obj)
                switch(index) {
                    case 0:
                        setRank1(obj);
                        break;
                    case 1:
                        setRank2(obj);
                        break;
                    case 2:
                        setRank3(obj);
                        break;
                    case 3:
                        setRank4(obj);
                        break;
                    case 4:
                        setRank5(obj);
                        setLastRank(obj.time)
                        break;
                    default:
                        break;
                }
                // console.log(doc.id, " => ", doc.data());
            });
        })()
    }, [submitted, setLastRank])

    const convertTime = (time) => {
        const minutes = minuteTime(time);
        const seconds = secondTime(time);
        if (minutes === 0) {
            return `${seconds} seconds`
        }
        return `${minutes} minutes ${seconds} seconds` 
    }

    return (
        <div>
            <table>
                <tr>
                    <th>NAME</th>
                    <th>TIME</th>
                </tr>
                {rank1.name !== '' &&
                    <tr>
                        <td>{ rank1.name }</td>
                        <td>{ convertTime(rank1.time) }</td>
                    </tr>
                }
                {rank2.name !== '' && 
                    <tr>
                        <td>{ rank2.name }</td>
                        <td>{ convertTime(rank2.time) }</td>
                    </tr>
                }
                {rank3.name !== '' &&
                    <tr>
                        <td>{ rank3.name }</td>
                        <td>{ convertTime(rank3.time) }</td>
                    </tr>
                }
                { rank4.name !== '' && 
                    <tr>
                        <td>{ rank4.name }</td>
                        <td>{ convertTime(rank4.time) }</td>
                    </tr>
                }   
                {rank5.name !== '' &&
                    <tr>
                        <td>{ rank5.name }</td>
                        <td>{ convertTime(rank5.time) }</td>
                    </tr>
                }     
            </table>
        </div>
    )
}

export default ScoreTable