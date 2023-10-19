import "./Bars1.css";
import { Cell } from "recharts";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
} from "recharts";

const Bars1 = () => {
  const data = [
    { name: "Not Started", Status: 40, color: "red", },
    { name: "  Ongoing", Status:5, color: "yellow", },
    { name: "  Finished", Status: 14, color: "green", },
    { name: "  Onhold", Status: 10, color: "blue", },
    { name: "  Cancelled", Status: 16, color: "gray" },
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
          <XAxis dataKey="name" scale="point" padding={{ left: 50, right: 50 }} 
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