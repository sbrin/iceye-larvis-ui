import React, { FC, useState, useEffect } from "react";
import AcqusitionsService from "../services/acquisitions.service";
import ChartStats from "./ChartStats";
import Bars from "./Bars";
import "./Acquisitions.css";

interface SiteData {
    timestamp: number;
    sites: number;
    date: Date;
}

const Acqusitions: FC = () => {
    const [max, setMax] = useState(0);
    const [total, setTotal] = useState(0);
    const [average, setAverage] = useState(0);
    const [chartData, setChartData] = useState([]);

    const onClick = (e: any) => {
        console.log(e);
    };

    const formatDate = (date: Date) => {
        const minutes = ("0" + date.getMinutes()).substr(-2);
        return `${date.getHours()}:${minutes}`;
    };

    useEffect(() => {
        AcqusitionsService.getAcquisitions().then(data => {
            const itemsMap: any = {};
            let _total = 0;
            let _max = 0;

            data.forEach((item: SiteData) => {
                const timeSecond = Math.floor(item.timestamp / 60000);
                _total += item.sites;

                itemsMap[timeSecond] = itemsMap[timeSecond]
                    ? itemsMap[timeSecond] + item.sites
                    : item.sites;
            });

            const itemsPrepared = Object.keys(itemsMap).map(key => {
                _max = itemsMap[key] > _max ? itemsMap[key] : _max;
                return {
                    value: itemsMap[key],
                    label: formatDate(new Date(parseInt(key) * 60000)),
                };
            });

            setTotal(_total);
            setAverage(Math.round(_total / itemsPrepared.length));
            setMax(_max);
            setChartData(itemsPrepared as any);
        });
    }, []);

    return (
        <div className="lrvs-chart">
            <h2 className="lrvs-chart__title">Site Acquisitions</h2>
            <div className="lrvs-chart__stats">
                <ChartStats label="Total" value={total}></ChartStats>
                <ChartStats label="Maximum" value={max}></ChartStats>
                <ChartStats label="Average" value={average}></ChartStats>
            </div>
            <Bars data={chartData} onClick={onClick} />
        </div>
    );
};

export default Acqusitions;
