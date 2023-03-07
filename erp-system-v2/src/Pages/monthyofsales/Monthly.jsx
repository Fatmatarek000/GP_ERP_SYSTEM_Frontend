
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer } from 'recharts';
import Sidebar from './../../Components/sidebar/Sidebar';
import Navbar from './../../Components/navbar/Navbar';
import "./monthly.scss"
export default class Monthly extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd';

  state = {
    data: [
      {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ],
    activeIndex: 0,
  };

  handleClick = (data, index) => {
    this.setState({
      activeIndex: index,
    });
  };


    
    <Sidebar />
  <div className="homeContainer">
    <Navbar />
    <div className="chart">
      <div className="title">{this.props.title}</div>
      <ResponsiveContainer width="100%" height={150}>
        <BarChart width={150} height={80} data={data}>
          <Bar dataKey="uv" onClick={this.handleClick}>
            {data.map((entry, index) => (
              <Cell cursor="pointer" fill={index === activeIndex ? '#181823' : '#645CBB'} key={`cell-${index}`} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <p className="content">{`"${activeItem.name}": ${activeItem.uv}`}</p>
    </div>
  </div>
      </div >
    )
  }
}
