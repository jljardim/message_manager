import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ["Honda", "Toyota", "Audi", "Volkswagen", "Chevrolet", "Fiat"],
  datasets: [
    {
      label: "# of Votes",
      data: [50, 45, 40, 5, 2, 3],
      backgroundColor: [
        "#0000CD",
        "#1E90FF",
        "#0000CD",
        "#1E90FF",
        "#0000CD",
        "#1E90FF",
      ],
      borderColor: [
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
        "#000000",
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  indexAxis: 'y',
  // Elements options apply to all of the options unless overridden in a dataset
  // In this case, we are setting the border of each horizontal bar to be 2px wide
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const HorizontalBarChart = () => (
  <>
    <div className='header'>
      <h1 className='title'>Horizontal Bar Chart</h1>
      <div className='links'>
        <a
          className='btn btn-gh'
          href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/HorizontalBar.js'
        >
          Github Source
        </a>
      </div>
    </div>
    <Bar data={data} options={options} />
  </>
);

export default HorizontalBarChart;