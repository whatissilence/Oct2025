import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: 'Стовпчикова діаграма продажів за 2025-2026 рік',
    },
  },
};

const data = {
  labels: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень'],
  datasets: [
    {
      label: 'Продажі за 2025 рік',
      data: [65, 59, 80, 81, 56, 55],
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
    },
    {
      label: 'Продажі за 2026 рік',
      data: [110, 112, 138, 97, 78, 111],
      backgroundColor: 'rgba(5, 170, 30)',
    },
  ],
};

export default function GraphicsDemo2() {
  return (
    <div>
      <h2>Лінійна діаграма продажів</h2>
      {/* Компонент Line для відображення лінійної діаграми */}
      <Bar options={options} data={data} />
    </div>
  );
};