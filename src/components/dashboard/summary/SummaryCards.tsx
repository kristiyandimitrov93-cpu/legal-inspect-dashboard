import { CircleChevronDown, CircleChevronUp } from 'lucide-react';
import './SummaryCards.scss';

type ChangeType = 'positive' | 'negative' | 'neutral';

const summmaryData: { id: string; label: string; value: string; change: string; changeType: ChangeType }[] = [
    { id: 'pages', label: 'Pages Analyzed', value: '47', change: '+6 pages', changeType: 'positive' },
    { id: 'precedents', label: 'Relevant Precedents', value: '12', change: '+3 cases', changeType: 'positive' },
    { id: 'risks', label: 'Identified Risks', value: '5', change: '+2 this week', changeType: 'positive' },
    { id: 'confidence', label: 'AI Confidence', value: '92%', change: '-4%', changeType: 'negative' },
];

export const SummaryCards = () => {
    return (
        <div className="summary-cards">
            {summmaryData.map((summary) => (
                <div key={summary.id} className="summary-card">
                    <p className="summary-card-label">{summary.label}</p>
                    <div className='summary-card-details'>
                        <div className="summary-card-value">{summary.value}</div>
                        <div className={`summary-card-change change-type-${summary.changeType}`}>
                            {summary.changeType === 'positive' && <CircleChevronUp size={16} />}
                            {summary.changeType === 'negative' && <CircleChevronDown size={16} />}
                            {summary.change}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}