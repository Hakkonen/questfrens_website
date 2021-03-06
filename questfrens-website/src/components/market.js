import React, { useState, useEffect } from 'react';

export default function Market(props) {
    const [ marketList, setMarketList ] = useState([])

    useEffect(async () => {
        console.log("running")
        const res = await getDispensers()
        
        setMarketList(res)
    }, [])

    useEffect(() => {
        console.log(marketList)
    }, [marketList])

    return (
        <div
            style={{ width: '100%', display: "flex", justifyContent: "center", alignContent: "center" }}
        >
            <table
                sx={{ width: 1 }}
            >
                <thead>
                <tr>
                    <th>Source</th>
                    <th>Satoshirate</th>
                    <th>Link</th>
                </tr>
                </thead>
                    {marketList.map((item, i) => (
                        <tr>
                            <td>{item.source}</td>
                            <td>{item.satoshirate}</td>
                            <td><a href={"https://xchain.io/tx/" + item.tx_hash} target="_blank">LINK</a></td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}

const getDispensers = async () => {
    const response = await fetch('https://questfrens.herokuapp.com/get_dispensers');
    const dispenserData = await response.json();
    console.log(dispenserData)
    return dispenserData
}