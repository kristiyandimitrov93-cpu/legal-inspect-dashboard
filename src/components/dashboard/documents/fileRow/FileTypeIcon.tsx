import { STYLES, type FileExt } from "../../../../types/documents";
import { FileText } from "lucide-react";

interface FileTypeIconProps {
    ext: FileExt
}

export const FileTypeIcon = ({ ext }: FileTypeIconProps) => {
    const { bgColor, color, label } = STYLES[ext];

    return (
        <div className="file-type-icon" style={{ backgroundColor: bgColor, color }} aria-hidden>
            <FileText size={18} strokeWidth={2} />
            <span className="file-type-icon-label">{label}</span>
        </div>
    );
}
