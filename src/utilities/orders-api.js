import sendRequest from './send-request';

const BASE_URL = '/api/recommendations';

export function getList() {
    return sendRequest(`${BASE_URL}/list`);
  }
  
  export function addAlbumToList(albumId) {
    return sendRequest(`${BASE_URL}/list/albums/${albumId}`, 'POST');
  }