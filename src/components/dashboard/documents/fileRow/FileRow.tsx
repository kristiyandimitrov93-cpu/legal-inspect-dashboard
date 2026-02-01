import { Download, Eye } from "lucide-react"
import { FileTypeIcon } from "./FileTypeIcon"
import type { DocumentFile } from "@/types/documents"

import './FileRow.scss'


export interface FileRowProps {
    documentFile: DocumentFile
    onPreview?: () => void;
    onDownload?: () => void;

}
export const FileRow = ({ documentFile, onPreview, onDownload }: FileRowProps) => {
    const { name, meta, ext } = documentFile

    return (<div className="file-row">
        <FileTypeIcon ext={ext} />

        <div className="file-meta">
            <div className="file-name" title={name}>
                {name}
            </div>
            <div className="file-sub">{meta}</div>
        </div>

        <div className="file-actions">
            <button
                className="icon-btn"
                aria-label={`Preview ${name}`}
                onClick={onPreview}
                type="button"
            >
                <Eye size={18} />
            </button>
            <button
                className="icon-btn"
                aria-label={`Download ${name}`}
                onClick={onDownload}
                type="button"
            >
                <Download size={18} />
            </button>
        </div>
    </div>
    )
}