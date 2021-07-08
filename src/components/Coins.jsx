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
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <form onSubmit={submitHandler} className="form-inline">
                        <div className="form-group mb-2">
                            <select
                                className="form-control"
                                id="coins"
                                onChange={changeHandler}
                                value={activeCoin}
                            >
                                {coinsData.map((coin, index) => {
                                    return (
                                        <option key={index} value={coin.id}>
                                            {coin.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary mb-2" type="submit">
                            Find
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default Coins;
