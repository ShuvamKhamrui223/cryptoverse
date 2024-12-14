import { Line } from "react-chartjs-2";
import {
  Chart,
  ChartData,
  CategoryScale,
  Legend,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  plugins,
} from "chart.js";
import { chartType } from "../../../types";
import React, { useEffect, useState } from "react";

Chart.register(
  CategoryScale,
  Title,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);
type LineChartType = {
  chartData: chartType;
};
const LineChart = ({ chartData }: LineChartType) => {
  let [data, setData] = useState();
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "bottom", color: "white" },
    },
  };
  useEffect(() => {
    let datacopy = [["price", "date"]];
    chartData.prices.map((price) =>
      datacopy.push([`${new Date(price[0]).toLocaleDateString()}`, price[1]])
    );
    setData(datacopy);
  }, []);
  return (
    <div>
      <Line
        color="white"
        options={options}
        data={{
          labels: data,
          datasets: [
            {
              data: data,
              borderColor: "royalblue",
              pointBackgroundColor: "cyan",
            },
          ],
        }}
      />
    </div>
  );
};

export default LineChart;
