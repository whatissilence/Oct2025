import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Реєстрація компонентів для Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Лінійна діаграма продажів за 2021 рік',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const data = {
  labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'],
  datasets: [
    {
      label: 'Продажі за 2025 рік',
      data: [65, 59, 80, 81, 56, 55],
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Продажі за 2026 рік',
      data: [110, 112, 138, 97, 78, 111],
      borderColor: 'rgb(10, 220, 50)',
      backgroundColor: 'rgba(5, 170, 30)',
    },
  ],
};

export default function GraphicsDemo() {
  return (
    <div>
      <h2>Лінійна діаграма продажів</h2>
      {/* Компонент Line для відображення лінійної діаграми */}
      <Line options={options} data={data} />
    </div>
  );
};