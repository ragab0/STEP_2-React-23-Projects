export const initState = {
  isPageModal: false, // Since We have also two pages then .. we'll use this case.. works;
  isLoading: false,
  isFailed: false,

  results: [],
  currentResult: [],
  currentCounter: 0,
  currentCorrectCounter: 0,
  currentAnswer: null,
  choices: [],

  formVals: {
    amount: 10,
    category: 21,
    difficulty: "easy"
  }
}


export default function Reducer(state, action) {
  switch (action.type) {
    case "fetchingResults":
      return {
        ...state,
        isLoading: false,
        isFailed: false,
        isPageModal: true,
        results: action.payload,
        currentResult: action.payload.length > 0 ? action.payload[0] : [],
        choices: action.payload.length > 0 ? [...action.payload[0].incorrect_answers, action.payload[0].correct_answer] : [] 
        // Is that in the right place.. Is not i should handle it in setAResult case !;
      }

    case "submitHandler":
      if (state.results.length === 0) {
        return state
      } else if (state.currentCounter >= state.results.length) {
        return {
          ...state,
          currentResult: {question: "DONE ^_^", }
        }
      } else {
        const res = state.results[state.currentCounter +1]
        const cho = res && [...res.incorrect_answers, res.correct_answer].sort((a, b) => Math.random() - 0.5)
        return {
          ...state,
          currentCounter: state.currentCounter +1,
          currentResult: res,
          choices: cho,
          currentCorrectCounter: action.payload === state.currentResult.correct_answer ? +state.currentCorrectCounter +1 : state.currentCorrectCounter,
          currentAnswer: null,
        }
      }

    case "loadingFetchingResults":
      return {
        ...state,
        isLoading: true,
        isFailed: false,
      }

    case "failedFetchingResults":
      return {
        ...state,
        isLoading: false,
        isFailed: true,
      }

    case "handlingFormVals":
      return {
        ...state,
        formVals: {
          ...state.formVals,
          ...action.payload,
        }
      }
    
    case "setAnswer":
      return {
        ...state,
        currentAnswer: action.payload,
      }

    case "reset":
      return initState;
    default:
      return state;
  }
}