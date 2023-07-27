export default function Error({fetchAgain}) {
        return (
            <div >
                <h1>oops! it's no there conection.</h1>
                <button className='btn btn-primary' onClick={() => fetchAgain()}>fetch again</button>
            </div>
        )

}