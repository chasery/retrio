import TokenService from './token-service';
import config from '../config';

const CardsApiService = {
  getCard(cardId) {
    return fetch(`${config.API_ENDPOINT}/cards/${cardId}`, {
      headers: {
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  postCard(card) {
    const { board_id, category, headline, text } = card;
    return fetch(`${config.API_ENDPOINT}/cards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        board_id,
        category,
        headline,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
    );
  },
  editCard(cardId, updatedCard) {
    const { board_id, category, headline, text } = updatedCard;
    return fetch(`${config.API_ENDPOINT}/cards/${cardId}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify({
        board_id,
        category,
        headline,
        text,
      }),
    }).then((res) =>
      !res.ok ? res.json().then((e) => Promise.reject(e)) : res.status
    );
  },
  deleteCard(cardId) {
    return fetch(`${config.API_ENDPOINT}/cards/${cardId}`, {
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

export default CardsApiService;
