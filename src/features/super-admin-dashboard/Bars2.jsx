import React from "react";
import "./Bars1.css";
import { Cell } from "recharts";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Bars1 = () => {
  const data = [
    { name: "All", Status: 10, color: "#ED9AA9",borderColor: "#D10328" },
    { name: "In Progress", Status:2, color: "#F5F6BB", borderColor: "#DFE227" },
    { name: "Testing", Status: 7, color: "#C4ECC3", borderColor: "#6BD069" },
    { name: "Feedback", Status: 5, color: "#A3A1F2", borderColor: "#1814DE" },
    { name: "Completed", Status: 8, color: "#D0D0D6", borderColor: "#a3a1f2" },
  ];
 

  return (
    
    <div className="chart1">
      <h3>Task Overview</h3>
      <div className="App">
        <BarChart
          width={550}
          height={150}
          data={data}
          
          barSize={60}
        >
          <XAxis dataKey="name" scale="point" padding={{ left: 80, right: 80 }} 
          className="xaxis"/>
          <YAxis />
          <Tooltip />
          {/* <Legend /> */}
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          {/* <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} /> */}

          <Bar dataKey="Status">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color}  stroke={entry.borderColor}/>
            ))}
          </Bar>

        </BarChart>
      </div>
    </div>
   
  );
};

export default Bars1;