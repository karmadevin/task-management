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
    { name: "Todo", Status: 40, color: "red", },
    { name: "In Progress", Status:15, color: "yellow",  },
    { name: "Review", Status: 7, color: "green",  },
    { name: "Done", Status: 10, color: "blue",},
    
  ];

 
  
  

  return (
    
    <div className="chart1">
      <h3>Project Status</h3>
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

