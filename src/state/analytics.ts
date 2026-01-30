import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { ChartDataPoint } from '../types/analytics';
import type { RootState } from './store';


interface AnalyticsState {
    chartData: ChartDataPoint[];
    showDocumentsLine: boolean;
    showRisksLine: boolean;
}

const initialState: AnalyticsState = {
    chartData: [
        { month: 'Jan', documentsAnalyzed: 15, riskPct: 21 },
        { month: 'Feb', documentsAnalyzed: 15, riskPct: 21 },
        { month: 'Mar', documentsAnalyzed: 35, riskPct: 25 },
        { month: 'Apr', documentsAnalyzed: 25, riskPct: 14 },
        { month: 'May', documentsAnalyzed: 26, riskPct: 9 },
        { month: 'Jun', documentsAnalyzed: 27, riskPct: 11 },
        { month: 'Jul', documentsAnalyzed: 40, riskPct: 22 },
        { month: 'Aug', documentsAnalyzed: 28, riskPct: 7 },
        { month: 'Sep', documentsAnalyzed: 35, riskPct: 25 },
        { month: 'Oct', documentsAnalyzed: 11, riskPct: 19 },
        { month: 'Nov', documentsAnalyzed: 34, riskPct: 11 },
        { month: 'Dec', documentsAnalyzed: 38, riskPct: 8 },
    ],
    showDocumentsLine: true,
    showRisksLine: true,
};

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers: {
        toggleDocumentsLine: (state) => {
            state.showDocumentsLine = !state.showDocumentsLine;
        },
        toggleRisksLine: (state) => {
            state.showRisksLine = !state.showRisksLine;
        },
    },
});

export const { toggleDocumentsLine, toggleRisksLine } = analyticsSlice.actions;
export default analyticsSlice.reducer;

export const analyticsStateSelector = (state: RootState) => state.analytics;

export const chartDataSelector = createSelector(analyticsStateSelector, state => state.chartData)
export const showDocumentsLineSelectpr = createSelector(analyticsStateSelector, state => state.showDocumentsLine)
export const showRiskLineSelector = createSelector(analyticsStateSelector, state => state.showRisksLine)
