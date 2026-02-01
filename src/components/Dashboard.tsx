import { CasesTable } from "./dashboard/cases/CasesTable"
import { RiskTrendChart } from "./dashboard/analytics/RiskTrendChart"
import { SummaryCards } from "./dashboard/summary/SummaryCards"
import { DocumentStatusCard } from "./dashboard/documents/statusCard/DocumentStatusCard"
import { AiSummaryCard } from "./dashboard/documents/aiSummary/AiSummaryCard"
import { DocumentsCard } from "./dashboard/documents/documentsCard/DocumentsCard"

export const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard-left">
                <DocumentStatusCard />
                <AiSummaryCard />
                <DocumentsCard />
            </div>

            <div className="dashboard-right">
                <SummaryCards />
                <RiskTrendChart />
                <CasesTable />
            </div>
        </div>)
}