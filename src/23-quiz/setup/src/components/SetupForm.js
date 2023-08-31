import { useGlobalContext } from "../utils/context";
import { levels, catgs } from "../constants/data";
import { fetchingResults } from "../utils/fetch";


export default function SetupForm() {
  const { appState, appDispatch } = useGlobalContext();

  async function handleSubmit(e) {
    e.preventDefault();
    const { amount, category, difficulty } = appState.formVals;
    fetchingResults(appDispatch, amount, category, difficulty);
  }

  function handleVals(e) {
    appDispatch({
      type: "handlingFormVals", 
      payload: {
        [e.target.name]:e.target.value
      }
    });
  }
  
  function createSelectFormControl(name, options=[]) {
    return (
      <div className="form-control">
        <label htmlFor={name}>select {name}</label>
        <select value={appState.formVals[name]} onChange={handleVals} name={name} id={name} className="form-input">
          {
            options.map(({n, v}, i) => (
              <option key={i} value={v ?? n}>{n}</option>
            ))
          }
        </select>
      </div>
    )
  }


  return (
    <section className="quiz quiz-small">
      <form className="setup-form" onSubmit={handleSubmit}>
        <h2>setup quiz</h2>
        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input value={appState.formVals.amount} onChange={handleVals} type="number" name="amount" id="amount" className="form-input" min="1" max="50" />
        </div>
        {createSelectFormControl("category", catgs)}
        {createSelectFormControl("difficulty", levels)}
        <button type="submit" className="submit-btn">start</button>
      </form>
    </section>
  );
}
