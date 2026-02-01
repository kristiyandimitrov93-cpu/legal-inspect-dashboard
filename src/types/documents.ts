
export interface FileMeta {
    name: string;
    meta: string;
    ext: FileExt
};

export interface DocumentFile extends FileMeta {
    analysedAt: string;
    lastEditedBy: string
    progress: number;
    stage: string
}


export type FileExt = "pdf" | "doc" | "docx";

export const STYLES: Record<FileExt, { bgColor: string; color: string; label: string }> = {
    pdf: { bgColor: "#FEE2E2", color: "#DC2626", label: "PDF" },
    doc: { bgColor: "#DBEAFE", color: "#2563EB", label: "DOC" },
    docx: { bgColor: "#DBEAFE", color: "#2563EB", label: "DOC" },
};



