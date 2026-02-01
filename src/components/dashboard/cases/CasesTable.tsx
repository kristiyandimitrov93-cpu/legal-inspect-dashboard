import './CasesTable.scss'
import type { RelevantCase } from '@/types/relativeCasesApi'
import { useGetRelevantCasesQuery } from '@/api/relevantCasesApi'
import { Card, CardBody, CardHeader, CardTitle } from '@/components/card/Card'
import { CardMenuButton } from '@/components/common/MoreActionBtn'
import { ArrowDown, ArrowUp, ArrowUpDown, MoreVertical } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export type SortColumn = 'caseName' | 'year' | 'relevance' | null;
export type SortDirection = 'asc' | 'desc';
export const CasesTable = () => {
    const [sortColumn, setSortColumn] = useState<SortColumn>(null)
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc')
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const { data, isLoading } = useGetRelevantCasesQuery()

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setOpenDropdown(null);
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);


    const [dropUp, setDropUp] = useState(false);

    const toggleDropdown = (e: React.MouseEvent, rowId: string) => {
        const btn = e.currentTarget as HTMLElement;
        if (openDropdown === rowId) {
            setOpenDropdown(null);
            return;
        }
        const rect = btn.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const estimatedMenuHeight = 160;
        setDropUp(spaceBelow < estimatedMenuHeight);
        setOpenDropdown(rowId);
    }
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
                                <th className="actions-col"></th>
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


                                    <td className="row-actions">
                                        <div ref={openDropdown === caseItem.id ? dropdownRef : null} style={{ position: 'relative' }}>
                                            <button
                                                className="row-actions-btn"
                                                onClick={(e) => toggleDropdown(e, caseItem.id)}
                                                aria-label="More actions"
                                            >
                                                <MoreVertical size={16} />
                                            </button>
                                            {openDropdown === caseItem.id && (
                                                <div className={`actions-dropdown ${dropUp ? "is-up" : ""}`}>
                                                    <button className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                                                        View Details
                                                    </button>
                                                    <button className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                                                        Download Report
                                                    </button>
                                                    <button className="dropdown-item" onClick={() => setOpenDropdown(null)}>
                                                        Add to Comparison
                                                    </button>
                                                </div>
                                            )}
                                        </div> </td></tr>)
                            })}
                        </tbody>
                    </table>
                </div>
            </CardBody>

        </Card >
    )
}