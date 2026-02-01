import './AiSummaryCard.scss'
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from "../../../card/Card";
import { CardMenuButton } from "../../../common/MoreActionBtn";
import { AlertTriangle } from 'lucide-react';


interface AiSummaryCardProps {
    riskLabel?: string;
    clauseType?: string;
    impact?: string;
    recommendation?: string;
};

export const AiSummaryCard = ({
    riskLabel = "Medium 2.3",
    clauseType = "License / IP",
    impact = "May affect exclusivity rights",
    recommendation = `Clarify the term "limited license" or replace with "non-exclusive use right".`,
}: AiSummaryCardProps) => {
    return (
        <Card className="ai-summary">
            <CardHeader actionBtn={<CardMenuButton />}>
                <CardTitle>AI Summary</CardTitle>
            </CardHeader>

            <CardBody>
                <div className="ai-sumary-rows">
                    <div className="ai-summary-row">
                        <span className="ai-summary-label">Risk Zone:</span>
                        <span className="pill pill-danger">
                            <AlertTriangle size={14} />
                            {riskLabel}
                        </span>
                    </div>
                    <div className="divider" />

                    <div className="ai-summary-row">
                        <span className="ai-summary-label">Clause Type:</span>
                        <span className="ai-summary-value">{clauseType}</span>
                    </div>
                    <div className="divider" />

                    <div className="ai-summary-row">
                        <span className="ai-summary-label">Impact:</span>
                        <span className="ai-summary-value">{impact}</span>
                    </div>
                    <div className="divider" />
                </div>

                <div className="ai-summary-recommendation">
                    <div className="ai-summary-recommendation-titile">Recommendation</div>
                    <div className="ai-summary-recommendation-message">{recommendation}</div>
                </div>
            </CardBody>

            <CardFooter>
                <button className="btn btn--primary">See Suggested Rewrite</button>
            </CardFooter>
        </Card>
    );
}
