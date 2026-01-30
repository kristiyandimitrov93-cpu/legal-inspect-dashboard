import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { chartDataSelector, showDocumentsLineSelectpr, showRiskLineSelector, toggleDocumentsLine, toggleRisksLine } from '../state/analytics';
import './Chart.scss'
export const Chart = () => {
    const chartDate = useSelector(chartDataSelector)
    const dispatch = useDispatch()

    const showDocumentsLine = useSelector(showDocumentsLineSelectpr)
    const showRisksLine = useSelector(showRiskLineSelector)

    return (
        <div className='chart-card'>
            <div className="chart-card-header">
                <h3> AI Risk Trend</h3>
                <div className="chart-card-filters">
                    <button
                        className={`filter documents-filter ${showDocumentsLine ? 'active' : ''}`}
                        onClick={() => dispatch(toggleDocumentsLine())}
                    >
                        Documents analyzed
                    </button>
                    <button
                        className={` filter risk-filter ${showRisksLine ? 'active' : ''}`}
                        onClick={() => dispatch(toggleRisksLine())}
                    >
                        With risks
                    </button>
                </div>
            </div>
            <div className='chart-card-container'>


                <LineChart
                    style={{ width: '100%', maxWidth: '700px', height: '100%', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={chartDate}
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    {showDocumentsLine && (
                        <Line type="monotone"
                            dataKey="documentsAnalyzed"
                            stroke="#467D95"
                            strokeWidth={2}
                            dot={{ fill: '#467D95', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6 }}
                            name="Documents analyzed" />)
                    }
                    {showRisksLine && (<Line type="monotone" dataKey="riskPct" stroke="#B87273"
                        strokeWidth={2}
                        dot={{ fill: '#B87273', strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6 }}
                        name='With risk'
                    />)}
                    <RechartsDevtools />
                </LineChart>
            </div>
        </div>
    );

}