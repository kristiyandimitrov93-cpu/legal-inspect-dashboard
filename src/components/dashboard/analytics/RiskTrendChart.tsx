import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
import { useDispatch, useSelector } from 'react-redux';
import { chartDataSelector, showDocumentsLineSelectpr, showRiskLineSelector, toggleDocumentsLine, toggleRisksLine } from '@/state/analytics';
import './RiskTrendChart.scss'
import { Card, CardBody, CardHeader, CardTitle } from '@/components/card/Card';
import clsx from 'clsx';


export const RiskTrendChart = () => {
    const chartDate = useSelector(chartDataSelector)
    const dispatch = useDispatch()

    const showDocumentsLine = useSelector(showDocumentsLineSelectpr)
    const showRisksLine = useSelector(showRiskLineSelector)

    return (
        <Card className='risk-trend-chart-card'>
            <CardHeader actionBtn={
                <div className="chart-card-filters">
                    <button
                        className={clsx("filter", "documents-filter", showDocumentsLine && "active")}
                        onClick={() => dispatch(toggleDocumentsLine())}
                    >
                        Documents analyzed
                    </button>
                    <button
                        className={clsx("filter", "risk-filter", showRisksLine && "active")}
                        onClick={() => dispatch(toggleRisksLine())}
                    >
                        With risks
                    </button>
                </div>

            }>
                <CardTitle>
                    AI Risk Trend
                </CardTitle>
            </CardHeader>
            <CardBody>
                <div className='chart-card-container'>
                    <ResponsiveContainer width="100%" height='100%'>
                        <LineChart
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
                    </ResponsiveContainer>
                </div>
            </CardBody>
        </Card >
    );

}