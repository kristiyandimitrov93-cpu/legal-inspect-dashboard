import { createSelector, createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';
import type { DocumentFile } from '../types/documents';


interface DocumentsState {
    documents: DocumentFile[]
}

const initialState: DocumentsState = {
    documents: [
        {
            name: "NDA_v3.2_Draft.pdf",
            meta: "PDF · 1.1 MB",
            ext: "pdf",
            analysedAt: "2025-11-07",
            lastEditedBy: "Anna K., Associate",
            progress: 91,
            stage: "Clause Analysis",
        },
        {
            name: "SupplierContract.docx",
            meta: "DOC · 0.63 MB",
            ext: "docx",
            analysedAt: "2025-11-05",
            lastEditedBy: "Michael R., Counsel",
            progress: 100,
            stage: "Completed",
        },
        {
            name: "NDA_v4.1_Final.pdf",
            meta: "PDF · 1.4 MB",
            ext: "pdf",
            analysedAt: "2025-11-09",
            lastEditedBy: "Anna K., Associate",
            progress: 100,
            stage: "Completed",
        },
    ]
};

const documentsSlice = createSlice({
    name: 'documents',
    initialState,
    reducers: {
    },
});
export default documentsSlice.reducer;

export const documentsStateSelector = (state: RootState) => state.documents;

export const documentSelector = createSelector(documentsStateSelector, state => state.documents)
export const latestDocumentSelector = createSelector(documentSelector, documents => {
    if (!documents || documents.length === 0) return null;
    return documents[0];
})
