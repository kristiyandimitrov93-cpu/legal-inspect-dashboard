import './CasesTable.scss'
import type { RelevantCase } from '@/types/relativeCasesApi'
import { useGetRelevantCasesQuery } from '@/api/relevantCasesApi'
import { Card, CardBody, CardHeader, CardTitle } from '@/components/card/Card'
import { CardMenuButton } from '@/components/common/MoreActionBtn'
import { ArrowDown, ArrowUp, ArrowUpDown } from 'lucide-react'
import { useState } from 'react'

export type SortColumn = 'caseName' | 'year' | 'relevance' | null;
export type SortDirection = 'asc' | 'desc';
export const CasesTable = () => {
    const [sortColumn, setSortColumn] = useState<SortColumn>(null)
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
    const { data, isLoading } = useGetRelevantCasesQuery()

    if (isLoading) {
        return <div>Loading</div>
    }

    const handleSort = (column: SortColumn) => {
        if (sortColumn === column) {
            setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'))
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }

    }
    const cases = data?.cases || []

    const filteredCases = [...cases].sort((a, b) => {
        let comparison = 0;

        if (sortColumn === 'caseName') {
            comparison = a.caseName.localeCompare(b.caseName);
        } else if (sortColumn === 'year') {
            comparison = a.year - b.year;
        } else if (sortColumn === 'relevance') {
            comparison = a.relevance - b.relevance;
        }
        return sortDirection === 'asc' ? comparison : -comparison;

    })

    const getSortIcon = (column: SortColumn) => {
        if (sortColumn !== column) {
            return <ArrowUpDown size={14} className="sort-icon" />;
        }
        return sortDirection === 'asc'
            ? <ArrowUp size={14} className="sort-icon sort-icon-active" />
            : <ArrowDown size={14} className="sort-icon sort-icon-active" />;
    };
    return (
        <Card className="cases-table-card">
            <CardHeader actionBtn={<CardMenuButton />}>
                <CardTitle> Relevant Cases</CardTitle>

            </CardHeader>
            <CardBody>
                <div className='cases-table-container'>
                    <table>
                        <thead>
                            <tr>
                                <th className="sortable" onClick={() => handleSort('caseName')}>
                                    <span className='sortable-header-name'> Case Name {getSortIcon('caseName')}
                                    </span>
                                </th>
                                <th>Jurisdiction</th>
                                <th className="sortable" onClick={() => handleSort('year')}>
                                    <span className='sortable-header-name'>
                                        Year {getSortIcon('year')}
                                    </span></th>
                                <th className="sortable" onClick={() => handleSort('relevance')}>
                                    <span className='sortable-header-name'>
                                        Relevance {getSortIcon('relevance')}
                                    </span></th>
                                <th>Clause Match</th>
                                <th>Outcome</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredCases?.map((caseItem: RelevantCase) => {
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
            </CardBody>

        </Card>
    )
}