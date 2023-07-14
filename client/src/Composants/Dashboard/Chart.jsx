import React from 'react';
import { Line } from 'react-chartjs-2';


function Chart() {
  // const data = {
  //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //   datasets: [
  //     {
  //       label: 'Sales',
  //       data: [20, 35, 25, 45, 30, 55],
  //       fill: false,
  //       borderColor: 'rgb(75, 192, 192)',
  //     },
  //   ],
  // };

  return (
    <div className='w-full'>
        <h1 className='p-10 text-white font-bold text-lg bg-[#203374]'> Statistiques  </h1>
        {/* <Line data={data} /> */}
    </div>
  )
}

export default Chart