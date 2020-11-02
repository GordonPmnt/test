import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Starlinks = () => {
    const [data, setData] = useState(null)
    const [displayed, setDisplayed] = useState(null)
    const [year, setYear] = useState("2020")
    const [month, setMonth] = useState("")
    const [day, setDay] = useState("")

    useEffect(() => {
        Axios({
            method: 'GET',
            url: `https://api.spacexdata.com/v4/starlink`,
        })
        .then(res => {
            setData(res.data)
            setDisplayed(res.data)
        })
        .catch(err => console.log(err))
    }, []);

    const handleClick = () => {
        let filtered = data;
        if (year) filtered = filtered.filter(starlink => starlink.spaceTrack.LAUNCH_DATE.split('-')[0] === year)
        if (month) filtered = filtered.filter(starlink => starlink.spaceTrack.LAUNCH_DATE.split('-')[1] === month)
        if (day) filtered = filtered.filter(starlink => starlink.spaceTrack.LAUNCH_DATE.split('-')[2] === day)
        setDisplayed(filtered)
    }

    return (
        <div style={{ padding: 10 }}>
            {
                displayed &&
                <>
                    <h1>Starlinks:</h1>
                    <input placeholder='Year "YYYY"' value={year} onChange={(e) => setYear(e.target.value)} />
                    <input placeholder='Month "MM"' value={month} onChange={(e) => setMonth(e.target.value)} />
                    <input placeholder='Day "DD"' value={day} onChange={(e) => setDay(e.target.value)} />
                    <button onClick={handleClick} >Filter</button>
                    <ol>
                    {
                        displayed.map(starlink => {
                        return (
                            <li>
                                <p>{starlink.spaceTrack.LAUNCH_DATE} - {starlink.spaceTrack.OBJECT_NAME}</p>
                            </li>
                        )})
                    }
                    </ol>
                </>
            }
        </div>
    )
}

export default Starlinks;