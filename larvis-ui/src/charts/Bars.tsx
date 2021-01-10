import React, { FC } from "react";
import "./Bars.css";

interface ChartData {
    label: string;
    value: number;
}

interface BarsProps {
    data: ChartData[];
    onClick: (e: ChartData) => void;
}

const Bars: FC<BarsProps> = ({ data, onClick }) => {
    const _length = data.length;

    const _max = data.reduce((acc, curr) => {
        return acc > curr.value ? acc : curr.value;
    }, 0);

    const items = data.map((item, idx) => {
        const _x = idx * (1000 / _length);
        const _height = 500 * (item.value / _max);
        const _y = 550 - _height;
        const _width = 1 + Math.ceil((1000 / _length) * 0.6);
        return (
            <g className="lrvs-bar" key={idx}>
                <rect
                    className="lrvs-bar__body"
                    width={_width}
                    height={_height}
                    x={_x}
                    y={_y + 20}
                    onClick={() => onClick(item)}
                ></rect>
                <text
                    className="lrvs-bar__value"
                    x={_x + 10}
                    y={_y + 10}
                    text-anchor="middle"
                >
                    {item.value}
                </text>
                <text
                    className="lrvs-bar__label"
                    x={_x + 8}
                    y="600"
                    text-anchor="middle"
                >
                    {item.label}
                </text>
            </g>
        );
    });
    return <svg viewBox="0 0 1000 640">{items}</svg>;
};

export default Bars;
