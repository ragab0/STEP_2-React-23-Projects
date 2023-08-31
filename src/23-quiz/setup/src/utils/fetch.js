import axios from "axios";


export async function fetchingResults(appDispatch, amount, category, difficulty) {
  appDispatch({type: "loadingFetchingResults"});
  try {
    const res = await axios(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`) 
    console.log(res.data.results);
    appDispatch({type: "fetchingResults", payload: res.data.results});
  } catch (error) {
    appDispatch({type: "failedFetchingResults"});
  }
}
