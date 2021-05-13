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
  editTeam(teamId, updatedTeam) {
    const { name } = updatedTeam;
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        name,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
  deleteTeam(teamId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
  postTeamMember(teamId, teamMember) {
    const { email } = teamMember;
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}/members`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        email,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  deleteTeamMember(teamId, memberId) {
    return fetch(`${config.API_ENDPOINT}/teams/${teamId}/members/${memberId}`, {
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
