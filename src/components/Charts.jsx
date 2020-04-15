import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, marketData, image }) => {
    return (
        <div className="charts">
            {/* {coinData.map((coin) => ( */}
            <div className="chart__container" key={coinData.name}>
                <h2 className="coin__title">{coinData.name}</h2>
                <h4 className="coin__symbol">{coinData.symbol}</h4>
                <div className="coin__logo">
                    <img src={image.small} height="40" alt={coinData.name} />
                </div>
                <Chart sparklineData={marketData} />
            </div>
            {/* ))} */}
        </div>
    );
};
export default Charts;
