let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 1
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 8
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 99
  },
  {
    id: 3,
    name: "Logan",
    score: 2
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  // 같은 id를 가지지 못한 Movie의 배열
  const cleanedMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
};
