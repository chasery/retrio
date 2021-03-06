import TokenService from './token-service';
import config from '../config';

const BoardsApiService = {
  getBoards() {
    return fetch(`${config.API_ENDPOINT}/boards`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getBoard(boardId) {
    return fetch(`${config.API_ENDPOINT}/boards/${boardId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postBoard(board) {
    const { name, team_id } = board;
    return fetch(`${config.API_ENDPOINT}/boards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name,
        team_id,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  editBoard(boardId, updatedBoard) {
    const { name, team_id } = updatedBoard;
    return fetch(`${config.API_ENDPOINT}/boards/${boardId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name,
        team_id,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
  deleteBoard(boardId) {
    return fetch(`${config.API_ENDPOINT}/boards/${boardId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
};

export default BoardsApiService;
