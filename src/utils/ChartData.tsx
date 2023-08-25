import { ChartOptions } from "chart.js";

export const data = {
  labels: ['Active', 'In-Active'],
  datasets: [
    {
      label: 'clients',
      data: [80, 20,],
      backgroundColor: [
        '#003CFF',
        '#D96FF8',
      ],
      // borderColor: [
      //   'rgba(255, 99, 132, 1)',
      //   'rgba(54, 162, 235, 1)',
      // ],
      // borderWidth: 1,
    },
  ],
};




export const options: ChartOptions<'doughnut'> = {
  plugins: {
    legend: {
      align: 'center',      // Align the legend to the end of the container
      position: 'right',
      fullSize: true,
      labels: {
        usePointStyle: true, // Use point style for labels}
      },
    },
  },
};

