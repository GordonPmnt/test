import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const Launchpad = ({ match }) => {
    const [data, setData] = useState(null)
    const [alert, setAlert] = useState(false)
    const { id } = match.params;

    useEffect(() => {
        Axios({
            method: 'POST',
            url: `https://api.spacexdata.com/v4/launchpads/query`,
            data: { 
                query: { _id: id },
                options: { populate: ['launches'] } }
        })
        .then(res => {
            const { launches, name } = res.data.docs[0];
            const failed = launches.filter(launch => !launch.success)
            setData({
                launchpad: name,
                all_failures: failed.map(fail => {
                    return {
                        name: fail.name,
                        failures: fail.failures.map(failure => failure.reason)
                    }
                })
            })
            setAlert(false)
        })
        .catch(err => setAlert(true))
    }, []);

    return (
        <>
            {
                data &&
                <>
                    <h1>Launchpad: {data.launchpad}</h1>
                    <pre id="json">
                        {JSON.stringify(data, undefined, 2)}
                    </pre>
                </>
            }
            {
                alert && <h4>{id} doesn't exist. Try again.</h4>
            }
        </>
    )
}

export default Launchpad;