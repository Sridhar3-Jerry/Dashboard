import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { date: '01', thisMonth: 8, lastMonth: 7 },
  { date: '02', thisMonth: 6, lastMonth: 5 },
  { date: '03', thisMonth: 7, lastMonth: 6 },
  { date: '04', thisMonth: 5, lastMonth: 4 },
  { date: '05', thisMonth: 9, lastMonth: 7 },
  { date: '06', thisMonth: 8, lastMonth: 6 },
  { date: '07', thisMonth: 10, lastMonth: 8 },
];

export default function PerformanceChart() {
  return (
    <ResponsiveContainer width="100%" height={340}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="thisMonth" stroke="#3b82f6" strokeWidth={2} />
        <Line type="monotone" dataKey="lastMonth" stroke="#f59e42" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}