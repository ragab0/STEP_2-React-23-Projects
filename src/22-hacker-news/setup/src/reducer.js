// import {
//   SET_LOADING,
//   SET_ERROR,
//   SET_STORIES,
//   REMOVE_STORY,
//   HANDLE_PAGE,
//   HANDLE_SEARCH,
// } from './actions'


export default function reducer (current, action) {
  switch (action.type) {
    case 'HANDLE_SEARCH':
      return ({...current, inpVal: action.value});

    case 'SET_LOADING':
      return ({...current, loading: action.value});

    case 'SET_ERROR':
      return ({...current, error: action.value});

    case 'SET_STORIES':
      return ({...current, hits: action.value});

    case 'HANDLE_PAGE':
      return({...current, page: current.page+1 >= current.nbPage ? 1 : current.page + (+action.value)});
      
  
    default:
      return {...current, ...action};
  }
}
