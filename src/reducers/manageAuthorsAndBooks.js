import { combineReducers } from "redux";
import uuid from "uuid";

const rootReducer = combineReducers({
  authors: authorsReducer,
  books: booksReducer
});

export default rootReducer;

function booksReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_BOOK":
      return [...state, action.book];

    case "REMOVE_BOOK":
      idx = state.findIndex(book => book.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

    default:
      return state;
  }
}

function authorsReducer(state = [], action) {
  let idx;
  switch (action.type) {
    case "ADD_AUTHOR":
      return [...state, action.author];

    case "REMOVE_AUTHOR":
      idx = state.findIndex(author => author.id  === action.id)
      return [...state.slice(0, idx), ...state.slice(idx + 1)];

      // In the new "ADD_BOOK" case, we're checking to see if an authorName matches with the name dispatches from the BookInput component. If the name already exists, state is returned unchanged. If the name is not present, it is added to the author array. We have two separate forms, one for adding just authors, and one that adds books and authors.
      // Note: We're using a useful package, uuid, to handle unique ID generation. With this refactor, since we are creating an author ID from within the reducer instead of in AuthorInput.js, we need to import it here as well.
      case "ADD_BOOK":
          let existingAuthor = state.filter(
            author => author.authorName === action.book.authorName
          );
          if (existingAuthor.length > 0) {
            return state;
          } else {
            return [...state, { authorName: action.book.authorName, id: uuid() }];
          }

    default:
      return state;
  }
}
