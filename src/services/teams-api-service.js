import TokenService from './token-service';
import config from '../config';

const TeamApiService = {
  getTeams() {
    return fetch(`${config.API_ENDPOINT}/teams`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  getTeam(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postTeam(team) {
    const { name } = team;
    return fetch(`${config.API_ENDPOINT}/teams`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name,
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

export default TeamApiService;
