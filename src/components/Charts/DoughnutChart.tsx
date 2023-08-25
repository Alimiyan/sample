import { Doughnut } from 'react-chartjs-2';
import "../../utils/ChartData"
import { data, options } from '../../utils/ChartData';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DoughnutChartProps {
    customClass?: string;
}

function DoughnutChart({ customClass }: DoughnutChartProps) {
    return (
        <div className={customClass}>
            <Doughnut data={data} options={options}/>
        </div>
    )
}

export default DoughnutChart;