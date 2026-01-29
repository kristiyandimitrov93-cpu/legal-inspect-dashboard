
interface PlaceholderPageProps {
    title: string
}
export const PlaceholderPage = ({ title }: PlaceholderPageProps) => {

    return (
        <div className="placeholder-page">
            <h1>{title}</h1>
            <p>Comming soon</p>
        </div >
    )
}