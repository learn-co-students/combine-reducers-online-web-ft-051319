import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
})

export default rootReducer

//export default function bookApp(
function booksReducer(state = [], action){
//   state = {
//     authors: [],
//     books: []
//   },
//   action 
// ) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return {
        ...state,
       // books: [...state.books, action.book]
       books: [...state, action.book]
      };

    case "REMOVE_BOOK":
      idx = state.books.findIndex(book => book.id === action.id);
      return {
        ...state,
        books: [...state.books.slice(0, idx), ...state.books.slice(idx + 1)]
      }
    default:
      return state
    }
  }

function authorsReducer(state = [], action){
  let idx;
  switch(action.type){
    case "ADD_AUTHOR":
      return [...state, action.author]
      // authors: [...state.authors, action.author]
  

    case "REMOVE_AUTHOR":
      idx = state.authors.findIndex(author => author.id === action.id);
      return [...state, ...state.authors.slice(0, idx), ...state.authors.slice(idx + 1)]


    default:
      return state;
  }
}