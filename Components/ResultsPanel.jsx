import { Activity } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ResultsPanel({ results, modelType }) {
  if (!results) return null;

  return results.map((r, i) => (
    <div key={i} className="border p-6 bg-white rounded">
      <h3 className="font-bold">
        <Activity className="inline mr-2" />
        {r.name} – {modelType.toUpperCase()}
      </h3>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={r.predictions[0].values.map((_, i) => ({
          i,
          x: r.predictions[0].values[i],
          y: r.predictions[1].values[i],
          z: r.predictions[2].values[i],
          c: r.predictions[3].values[i]
        }))}>
          <XAxis dataKey="i" />
          <YAxis />
          <Tooltip />
          <Line dataKey="x" stroke="blue" dot={false} />
          <Line dataKey="y" stroke="green" dot={false} />
          <Line dataKey="z" stroke="orange" dot={false} />
          <Line dataKey="c" stroke="purple" dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  ));
}
