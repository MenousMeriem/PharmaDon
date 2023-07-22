import React from 'react';
import { Doughnut, Scatter, Line } from 'react-chartjs-2';
import 'chart.js/auto'

function Chart() {

  const data1 = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales' ,
        data: [20, 35, 25, 45, 30, 55] ,
        fill: false,
        borderColor: 'rgb(75, 192, 192)' ,
      },
    ],
  };

  const data2 = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
  };

  const data3 = {
    labels: [
      'January',
      'February',
      'March',
      'April'
    ],
    datasets: [{
      type: 'bar',
      label: 'Bar Dataset',
      data: [10, 20, 30, 40],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
      }, {
      type: 'line',
      label: 'Line Dataset',
      data: [50, 50, 50, 50],
      fill: false,
      borderColor: 'rgb(54, 162, 235)'
      }]
  };

  return (
    <div className='w-full'>
      
      <h1 className='p-10 text-[#203374] font-black text-3xl bg-[#e1ecf7] border-[#203374] border-b-4  rounded-b-2xl'> Statistiques  </h1>
      
      <div className='grid grid-cols-3 gap-3 p-3 h-44 mt-5'>
        <div className="card bg-[#084b83] shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">Nombre de pharmacies</h2>
            <p>00000000</p>
          </div>
        </div>
        <div className="card bg-[#d65108] shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">Nombre d'associations </h2>
            <p>00000000000</p>
          </div>
        </div>
        <div className="card bg-[#1f7a8c] shadow-xl text-white">
          <div className="card-body">
            <h2 className="card-title">Nombre total des annonces</h2>
            <p>0000000000000</p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-2 p-5 gap-5'>
        <div className="card bg-base-100 shadow-xl ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Titre 1</h2>
            <Line data={data1} />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Titre 2</h2>
            <Scatter data={data3} />
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Titre 3</h2>
            <Doughnut data={data2} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart