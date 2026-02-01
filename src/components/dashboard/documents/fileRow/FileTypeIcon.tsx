import { STYLES, type FileExt } from "../../../../types/documents";
import { FileText } from "lucide-react";


export function FileTypeIcon({ ext }: { ext: FileExt }) {
    const { bgColor, color, label } = STYLES[ext];

    return (
        <div className="file-type-icon" style={{ backgroundColor: bgColor, color }} aria-hidden>
            <FileText size={18} strokeWidth={2} />
            <span className="file-type-icon-label">{label}</span>
        </div>
    );
}
