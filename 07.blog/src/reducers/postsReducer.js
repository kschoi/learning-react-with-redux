export default (state = [], action) => {
  //  bad!
  // return document.querySelector('input');

  // bad!
  // return Axios.get('/Posts');

  // bad!
  // state[0] = 'sam';
  // state.pop();
  // state.push();

  // bad!
  // state.name = 'sam';
  // state.age = 30;

  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
