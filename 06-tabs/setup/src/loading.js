export default function Loading({again}) {

    function againHandle() {
        return (
            <div>
                <p style={{color:'red'}}>Faild to load data..</p>
                <button className="btn" onClick={() => window.location.reload()}>
                    Please Reload!
                </button>
            </div>
        )
    }


    return (
        <section className="section loading">
            <h1>Loading...</h1>
            {again && againHandle()}
        </section>
    )
}