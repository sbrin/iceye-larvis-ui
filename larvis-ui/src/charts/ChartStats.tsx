import React, { FC } from "react";
import "./ChartStats.css";

interface ChartStatsProps {
    label: string;
    value: number;
}

const ChartStats: FC<ChartStatsProps> = ({ label, value }) => {
    return (
        <div className="lrvs-stats">
            <div className="lrvs-stats__label">{label}</div>
            <div className="lrvs-stats__value">{value}</div>
        </div>
    );
};

export default ChartStats;
