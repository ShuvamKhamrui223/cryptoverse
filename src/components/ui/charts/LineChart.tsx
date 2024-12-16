import {
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";
import { formatCurrency } from "../../../utils/NumberFormatter";
import { chartType } from "../../../types";
import React from "react";

// type CryptoLineChartProps = {
//   chartData: chartType | undefined;
// };
type TProps<T> = {
  chartData: T[];
  selectedData: string;
};
const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "short",
  day: "numeric",
};
const CryptoLineChart: React.FC<TProps<chartType>> = ({
  chartData,
  selectedData,
}) => {
  const data = chartData?.map((price) => ({
    date: new Date(price[0]).toLocaleDateString("en-us", options),
    price: price[1],
  }));
  return (
    <div className="h-[20rem]">
      <ResponsiveContainer width={"100%"} height={"100%"}>
        <AreaChart data={data}>
          {/* <CartesianGrid/> */}

          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload?.length) {
                return (
                  <div className="bg-gray-950 p-2">
                    <span className="text-sm">price</span>
                    <span className="text-xl font-semibold">
                      {payload[0]?.value && formatCurrency(payload[0]?.value)}
                    </span>
                  </div>
                );
              }
            }}
          />
          <Legend className="bg-slate-800 shadow-lg font-semibold" />
          <XAxis dataKey={"date"} stroke="white" fontSize={12} />
          <YAxis
            stroke="white"
            fontSize={12}
            tickFormatter={(value) => formatCurrency(value)}
          />
          <Area
            type="monotone"
            name={selectedData}
            stroke="hsla(122,20%,70%,0.8)"
            dataKey={"price"}
            dot={true}
            fill="hsla(122,20%,25%,0.8)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CryptoLineChart;
