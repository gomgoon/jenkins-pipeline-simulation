// src/components/Chart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { useEffect, useState } from "react";

export default function Chart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/price-data")
      .then(res => res.json())
      .then(data =>
        setData(
          data.map((d) => ({
            date: d.Date.slice(0, 10),
            price: d.Close,
          }))
        )
      );
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2">📈 삼성전자 자산 추이</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
