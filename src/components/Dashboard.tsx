import { CasesTable } from "./dashboard/cases/CasesTable"
import { RiskTrendChart } from "./dashboard/analytics/RiskTrendChart"
import { SummaryCards } from "./dashboard/summary/SummaryCards"

export const Dashboard = () => {
    return (<div className="dashboard">
        <div className="dashboard-left">
            <div>Document status</div>
            <div>Ai review</div>
            <div>Ai summmary</div>
        </div>
        <div className="dashboard-right">
            <SummaryCards />
            <RiskTrendChart />
            <CasesTable />
        </div>
    </div>)
}