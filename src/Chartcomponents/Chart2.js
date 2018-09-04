import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Legend, Bar, Tooltip} from 'recharts';
import moment from 'moment';
import './Chart2.css';

const Chart2 = ({data_set}) => {

	const mystyle = {
		margin: "50px auto"
	}

	return (
	<BarChart style ={mystyle} width={730} height={250} data={data_set}>
	  <CartesianGrid strokeDasharray="3 3" />
	 	<XAxis dataKey='weekday' 
			  		 stroke="black"
			  	     tickFormatter={(tick) => moment(tick*1000).format('ddd')}
			  	     />
		<YAxis type="number" domain={['auto', 'auto']} stroke="black"/>
	  <Tooltip cursor={false}/>
	  <Legend verticalAlign="top" height={36}/>
	  <Bar dataKey="humid" fill="#8884d8" />
	  <Bar dataKey="precip" fill="#82ca9d" />
	</BarChart>
		);
}
export default Chart2;

