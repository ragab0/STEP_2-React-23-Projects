export default function Title({state, fetchAgain}) {

    const good = <>
                    <h2>our tours</h2> 
                    <div className='underline'/>
                 </>
                
    const baad = <>
                    <h2>No Tours Left</h2>
                    <button className="btn" onClick={fetchAgain}>Refresh</button>
                 </>


    return state ? good : baad;
}