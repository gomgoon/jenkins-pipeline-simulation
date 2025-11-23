// src/components/Summary.jsx
import { useEffect, useState } from "react";

export default function Summary() {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/summary")
      .then((res) => res.json())
      .then(setSummary);
  }, []);

  if (!summary) return <p>로딩 중...</p>;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-lg font-bold mb-2">💰 현재 평가 정보</h2>
      <p>📌 현재 평가 금액: <strong>{summary.current_value.toLocaleString()} 원</strong></p>
      <p>📈 수익률: <strong>{summary.rate_of_return.toFixed(2)}%</strong></p>
    </div>
  );
}
