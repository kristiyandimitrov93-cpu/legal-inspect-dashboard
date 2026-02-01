import './Card.scss'
import clsx from "clsx";
import type { HTMLAttributes } from "react";


type DivProps = HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: DivProps) {
    return <section className={clsx("card", className)} {...props} />;
}

export function CardHeader({
    className,
    actionBtn,
    children,
    ...props
}: any) {
    return (
        <header className={clsx("card-header", className)} {...props}>
            <div className="card-header-title">{children}</div>
            {actionBtn && <div className="card-header-action">{actionBtn}</div>}
        </header>
    );
}

export function CardTitle({
    className,
    ...props
}: HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={clsx("card-title", className)} {...props} />;
}

export function CardSubtitle({ className, ...props }: DivProps) {
    return <div className={clsx("card-subtitle", className)} {...props} />;
}

export function CardBody({ className, ...props }: DivProps) {
    return <div className={clsx("card-body", className)} {...props} />;
}

export function CardFooter({ className, ...props }: DivProps) {
    return <footer className={clsx("card-footer", className)} {...props} />;
}
