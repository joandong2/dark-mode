import React, { useState, useEffect } from "react";
import axios from "axios";

const Coins = (props) => {
    const [activeCoin, setActiveCoin] = useState("bitcoin");
    const [coinsData, setCoinsData] = useState([]);

    useEffect(() => {
        axios
            .get("https://api.coingecko.com/api/v3/coins/list")
            .then((res) => {
                setCoinsData(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    const changeHandler = (e) => {
        setActiveCoin(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        props.coinKey(activeCoin);
    };

    return (
        <form onSubmit={submitHandler}>
            <select id="coins" onChange={changeHandler} value={activeCoin}>
                {coinsData.map((coin, index) => {
                    return (
                        <option key={index} value={coin.id}>
                            {coin.name}
                        </option>
                    );
                })}
            </select>
            <button type="submit">Get</button>
        </form>
    );
};
export default Coins;
