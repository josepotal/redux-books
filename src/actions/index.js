//action creators
export function selectBook(book) {
  // selectBook is an ActionCreator, must return an action
  // an action with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}