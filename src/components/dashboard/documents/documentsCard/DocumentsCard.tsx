import "./DocumentsCard.scss";
import { ChevronDown } from "lucide-react";
import { Card, CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter } from "@/components/card/Card";
import { CardMenuButton } from "@/components/common/MoreActionBtn";
import { FileRow } from "@/components/dashboard/documents/fileRow/FileRow";
import { useSelector } from "react-redux";
import { documentsSelector } from "@/state/documents";


export interface DocumentCardProps {
    onShowAll?: () => void
}
export const DocumentsCard = ({ onShowAll }: DocumentCardProps) => {
    const documents = useSelector(documentsSelector)
    return (
        <Card className="documents-card">
            <CardHeader
                actionBtn={<CardMenuButton />}
            >
                <CardTitle>Documents</CardTitle>
                <CardSubtitle>Last AI Documents Reviews</CardSubtitle>
            </CardHeader>

            <CardBody>
                <div className="documents-list">
                    {documents.map((doc) => (
                        <div className="document-row" key={doc.name}>
                            <FileRow documentFile={doc} />
                        </div>
                    ))}
                </div>
            </CardBody>

            <CardFooter>
                <button className="documents-show-all" onClick={onShowAll} type="button">
                    Show all <ChevronDown size={16} />
                </button>
            </CardFooter>
        </Card>
    );
}
