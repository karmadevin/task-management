import "./Bars1.css";
import { Cell } from "recharts";
import { BarChart, XAxis, YAxis, Tooltip, Bar } from "recharts";

const Bars1 = () => {
  const data = [
    { name: "All", Status: 40, color: "#ED9AA9", borderColor: "#D10328" },
    {
      name: "In Progress",
      Status: 15,
      color: "#F5F6BB",
      borderColor: "#DFE227",
    },
    { name: "On Hold", Status: 7, color: "#C4ECC3", borderColor: "#6BD069" },
    { name: "Completed", Status: 10, color: "#A3A1F2", borderColor: "#1814DE" },
  ];

  return (
    <div className="chart1">
      <h3>Project Status</h3>
      <div className="App">
        <BarChart width={550} height={150} data={data} barSize={60}>
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 100, right: 100 }}
            className="xaxis"
          />
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} /> */}

          <Bar dataKey="Status">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                stroke={entry.borderColor}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default Bars1;
