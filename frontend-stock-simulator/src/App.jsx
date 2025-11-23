// src/App.jsx
import Summary from "./components/Summary";
import Chart from "./components/Chart";

export default function App() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📊 모의 주식 시뮬레이터</h1>
      <Summary />
      <Chart />
    </div>
  );
}
