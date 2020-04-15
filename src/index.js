import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import Coins from "./components/Coins";
import "./styles.scss";

const App = () => {
    const [currCoin, setCurrCoin] = useState("bitcoin");
    const [coinData, setCoinData] = useState([]);
    const [marketData, setMarketData] = useState([]);
    const [image, setImage] = useState([]);

    useEffect(() => {
        axios
            .get(
                // "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
                `https://api.coingecko.com/api/v3/coins/${currCoin}?sparkline=true&vs_currency=us`
            )
            .then((res) => {
                setCoinData(res.data);
                setMarketData(res.data.market_data.sparkline_7d.price);
                setImage(res.data.image);
            })
            .catch((err) => console.log(err));
    }, [currCoin]);

    const coinKey = (coin) => {
        setCurrCoin(coin);
    };

    return (
        <div className="App ">
            <Navbar />
            <Coins coinKey={coinKey} />
            <Charts coinData={coinData} marketData={marketData} image={image} />
        </div>
    );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
