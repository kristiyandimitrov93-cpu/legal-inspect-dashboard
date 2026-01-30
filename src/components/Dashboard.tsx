import { useGetRelevantCasesQuery } from "../api/relevantCasesApi"

export const Dashboard = () => {

    const { data, error, isLoading } = useGetRelevantCasesQuery()
    console.log(data)
    console.log(error)
    console.log(isLoading)
    return (<div className="dashboard">
        <div className="dashboard-left">
            <div>Document status</div>
            <div>Ai review</div>
            <div>Ai summmary</div>
        </div>
        <div className="dashboard-right">
            <div>Summary</div>
            <div>AI risk trent</div>
            <div> Relevant cases</div>
        </div>
    </div>)
}