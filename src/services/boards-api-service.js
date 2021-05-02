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
  // getRack(rackId) {
  //   return fetch(`${config.API_ENDPOINT}/racks/${rackId}`, {
  //     headers: {
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
  // postRack(rack) {
  //   const { rack_name } = rack;
  //   return fetch(`${config.API_ENDPOINT}/racks`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json',
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //     },
  //     body: JSON.stringify({
  //       rack_name: rack_name,
  //     }),
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
  // editRack(rackId, updatedRack) {
  //   const { rack_name } = updatedRack;
  //   return fetch(`${config.API_ENDPOINT}/racks/${rackId}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'content-type': 'application/json',
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //     },
  //     body: JSON.stringify({
  //       rack_name: rack_name,
  //     }),
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
  //   );
  // },
  // deleteRack(rackId) {
  //   return fetch(`${config.API_ENDPOINT}/racks/${rackId}`, {
  //     method: 'DELETE',
  //     headers: {
  //       'content-type': 'application/json',
  //       authorization: `bearer ${TokenService.getAuthToken()}`,
  //     },
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
  //   );
  // },
};

export default BoardsApiService;
