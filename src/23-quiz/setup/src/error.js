export default function Error({fetchAgain}) {
    return (
        <div>
            <button onClick={fetchAgain}>Fetch again</button>
        </div>
    )
}