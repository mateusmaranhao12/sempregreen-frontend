'use client'

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from 'recharts'

const data = [
    { lucro: 0 },
    { lucro: 0 },
    { lucro: 0 },
    { lucro: 0 },
    { lucro: 0 },
    { lucro: 0 },
    { lucro: 0 },
]

export default function GraficoLucro() {
    return (
        <div className="bg-white rounded overflow-hidden h-48 text-black p-2">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="lucro" fill="#60A5FA" name="Lucro" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
