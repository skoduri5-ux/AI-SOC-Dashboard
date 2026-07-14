import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from "recharts";


const data = [
  {
    name: "Critical",
    value: 18
  },
  {
    name: "High",
    value: 52
  },
  {
    name: "Medium",
    value: 145
  },
  {
    name: "Low",
    value: 321
  }
];


function ThreatPieChart() {

  return (

    <div className="w-full h-[300px]">

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >

            {
              data.map((entry,index)=>(
                <Cell key={index}/>
              ))
            }

          </Pie>


          <Tooltip />

          <Legend />

        </PieChart>

      </ResponsiveContainer>


    </div>

  );

}


export default ThreatPieChart;
