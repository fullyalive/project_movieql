import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
  // fetch(`${API_URL}`)
  //   .then(res = res.json())
  //   .then(json => json.data.movies);
  let REQUEST_URL = API_URL;
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
    // limit이 0보다 크면 요청 URL애 해당 string을 추가하는 것
  }
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  return fetch(REQUEST_URL)
    .then(res => res.json())
    .then(json => json.data.movies);
};
