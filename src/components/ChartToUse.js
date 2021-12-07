// Importaciones para la grafica
import {useEffect, useState} from "react";
import React from "react";
import { Bar } from 'react-chartjs-2';
import {getCountSportLeague} from "../api/index";
import {
    Chart,
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  } from 'chart.js';
  Chart.register(
    ArcElement,
    LineElement,
    BarElement,
    PointElement,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale,
    Decimation,
    Filler,
    Legend,
    Title,
    Tooltip,
    SubTitle
  );

function ChartToUse() {
    const [result, setResult] = useState([]);

    const data={
        labels: Object.values(result).map((i)=>{
            return(i.NombreDeporte)
        }),
        datasets:[{
            label: 'Número de ligas en este deporte',
            backgroundColor: '#505050',
            borderColor: '#505050',
            borderWidth: 1,
            hoverBackgroundColor: '#726565',
            hoverBorderColor: '#726565',
            data: Object.values(result).map((i)=>{
                return(i.Cantidad)
            })
        }]
    };

    


    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }

    useEffect(() => {
        console.log('Sports');
        fetchData();
    }, []);

    const fetchData = async () => {
        const response  = await getCountSportLeague();
        setResult(response.data.recordset);
    };



    return (
        <div className='mx-auto' style={{width: '90%', height: '500px'}}>
            <Bar data={data} options={opciones} />
        </div>
    );

    
}

export default ChartToUse;