import TokenService from './token-service';
import config from '../config';

const UsersApiService = {
  postUser(user) {
    const { email, password, first_name, last_name } = user;
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        email,
        password,
        first_name,
        last_name,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
};

export default UsersApiService;
