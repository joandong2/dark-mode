import React from "react";
import Chart from "./Chart";

const Charts = ({ coinData, marketData, image }) => {
    return (
        <div className="charts container">
            {/* {coinData.map((coin) => ( */}
            <div className="chart__container" key={coinData.name}>
                <div className="coin-title">
                    <img src={image.large} alt={coinData.name} />{" "}
                    <p className="coin__title">{coinData.name}</p>
                </div>
                {/* <h2 className="coin__title">{coinData.name}</h2> */}

                {/* <h4 className="coin__symbol"></h4> */}
                {/* <div className="coin__logo"></div> */}
                <Chart sparklineData={marketData} />
            </div>
            {/* ))} */}
        </div>
    );
};
export default Charts;
