import React,{useState, useEffect} from 'react';
import { fetchDailyData } from '../API/index.js';
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({data:{confirmed, recovered, deaths}}) => {
    const [dailyData, setDailyData] = useState([]);
    
    useEffect(() => {
    const fetchAPI = async()=>{
        setDailyData(await fetchDailyData());
        }
        fetchAPI();
    },[]);

const lineChart =(
    dailyData.length ? ( 
        <Line data={{
                    labels: dailyData.map(({date}) =>  date),
                    datasets :[{
                        data :  dailyData.map(({confirmed}) =>  confirmed),
                        label: 'Infected',
                        borderColor : 'blue',
                        backgroundColor : 'rgba(0,0,0,0.5)',
                        fill: true,
                        },
                    {
                        data :  dailyData.map(({deaths}) =>  deaths),
                        label: 'Deaths',
                        borderColor: 'rgba(1 ,20, 30,0.5)',
                        backgroundColor : 'rgb(1 ,20, 30,0.5)',
                        fill: true,
                        },
                        ]
                    }}
                    options={ {
                        scales : { xAxes : [ { gridLines : { display : true } } ], yAxes : [ { gridLines : { display : true } } ] },
                        title : {display : true , text : `LINE GRAPH`}
                    } }
                    />):null
                    );

const barChart  =(
       confirmed?(
        <Bar
        data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets:[{
                label:'people',
                backgroundColor:['rgba(0, 0, 255, 0.5)','rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 0, 0.5)' ],
                data:[confirmed.value, recovered.value, deaths.value]
            }]
        }}
        options={{
            legend:{display:false},
            title: {display:true, text:`BAR GRAPH`}
        }}
        />           
        ): null
    )
    return (
     <div>
         <div >{lineChart}</div>
         <div >{barChart}</div>
     </div>
    )
}
export default Chart;