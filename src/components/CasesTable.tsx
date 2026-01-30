import { MoreHorizontal } from 'lucide-react'
import './CasesTable.scss'
import type { RelevantCase } from '../types/relativeCasesApi'
import { useGetRelevantCasesQuery } from '../api/relevantCasesApi'
export const CasesTable = () => {
    const { data, error, isLoading } = useGetRelevantCasesQuery()
    debugger
    if (isLoading) {
        return <div>Loading</div>
    }

    return (
        <div className="cases-table-card">
            <div className="cases-table-card-header">
                <h3> Relevant Cases</h3>
                <button aria-label="More actions">
                    <MoreHorizontal size={16} />
                </button>
            </div>
            <div className='cases-table-container'>
                <table>
                    <thead>
                        <tr>
                            <th>Case Name</th>
                            <th>Jurisdiction</th>
                            <th>Year</th>
                            <th>Relevance</th>
                            <th>Clause Match</th>
                            <th>Outcome</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data!.cases.map((caseItem: RelevantCase) => {
                            return (<tr key={caseItem.id}>
                                <td>
                                    <span>{caseItem.caseName}</span>
                                </td>
                                <td>
                                    <span>{caseItem.jurisdiction}</span>
                                </td>
                                <td>
                                    <span>{caseItem.year}</span>
                                </td>
                                <td>
                                    <span>{caseItem.relevance}</span>
                                </td>
                                <td>
                                    <span>{caseItem.clauseMatch}</span>
                                </td>
                                <td><span>{caseItem.outcome}</span></td>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>

        </div>
    )
}