import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'i like it', duration: '2:30' },
		{ title: 'boys in love', duration: '3:15' },
		{ title: 'idol', duration: '1:45' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});

