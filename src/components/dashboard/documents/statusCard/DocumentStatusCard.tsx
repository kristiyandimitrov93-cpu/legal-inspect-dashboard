import { Card, CardHeader, CardTitle, CardBody } from "@/components/card/Card";

import "./DocumentStatusCard.scss";
import { CardMenuButton } from "@/components/common/MoreActionBtn";
import { useSelector } from "react-redux";
import { latestDocumentSelector } from "@/state/documents";
import { FileRow } from "@/components/dashboard/documents/fileRow/FileRow";



export const DocumentStatusCard = () => {
    const latestDocument = useSelector(latestDocumentSelector)
    if (latestDocument === null) {
        return;
    }
    const { analysedAt, lastEditedBy, progress, stage } = latestDocument
    return (
        <Card className="document-status">
            <CardHeader
                actionBtn={<CardMenuButton />}
            >
                <CardTitle>Document Status</CardTitle>
            </CardHeader>

            <CardBody>
                <div className="document-status-file-row">
                    <FileRow documentFile={latestDocument} />
                </div>
                <div className="document-status-divider" />

                <div className="document-status-rows">
                    <div className="document-status-row">
                        <span className="document-status-label">Analyzed:</span>
                        <span className="document-status-value">{analysedAt}</span>
                    </div>
                    <div className="document-status-divider" />
                    <div className="document-status-row">
                        <span className="document-status-label">Last Edited:</span>
                        <span className="document-status-value">{lastEditedBy}</span>
                    </div>
                </div>

                <div className="document-status-divider" />

                <div className="document-status-progress-bar-box">
                    <div className="document-status-progress-title">AI Review Progress</div>
                    <div className="document-status-progress-pct">{progress}% complete</div>
                </div>

                <div
                    className="document-status-progress-bar"
                    role="progressbar"
                    aria-label="AI Review Progress"
                    aria-valuenow={progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                >
                    <div className="document-status-progress-fill" style={{ width: `${progress}%` }} />
                </div>

                <div className="document-status-stage">Stage {stage}</div>
            </CardBody>
        </Card >
    );
}
