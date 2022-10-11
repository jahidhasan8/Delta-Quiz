

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    Bar,
    BarChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

const Statistics = () => {
    const quizInfoData = useLoaderData().data;
    return (
        <div className="md:px-80  mt-16">

            <div>
                <ResponsiveContainer width="90%" height={400}>
                    <BarChart data={quizInfoData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;