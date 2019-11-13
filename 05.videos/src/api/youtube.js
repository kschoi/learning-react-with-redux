import axios from 'axios';

const KEY = 'AIzaSyAK9Ss8UXcihcD-0BFBzkQmIHndBv899zI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
