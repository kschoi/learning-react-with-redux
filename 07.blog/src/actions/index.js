import jsonPlaceholder from '../api/jsonPlaceholder';

// Bad approach!!!!
// Error: Actions must be plain objects. Use custom middleware for async actions.
// export const fetchPosts = async () => {
//     const response = await jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: response
//     }
// };

// width promise
// export const fetchPosts = () => {
//     const promise = jsonPlaceholder.get('/posts');

//     return {
//         type: 'FETCH_POSTS',
//         payload: promise
//     }
// };

// width redux-thunk
// export const fetchPosts = () => {
// 	return async (dispatch, getState) => {
// 		const response = await jsonPlaceholder.get('/posts');

// 		dispatch({
// 			type: 'FETCH_POSTS',
// 			payload: response
// 		});
// 	}
// };
// =>
export const fetchPosts = () => async dispatch => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({
		type: 'FETCH_POSTS',
		payload: response
	});
};



