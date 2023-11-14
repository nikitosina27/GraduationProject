import axios from 'axios';

const apiKey = '88560c1b'; 

export const searchMovies = async (searchTerm: string, year: string, type: string, page: number) => {
  try {
    const response = await axios.get('https://www.omdbapi.com/', {
      params: {
        apikey: apiKey,
        s: searchTerm,
        y: year,
        type: type,
        page: page,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movies');
  }
};

export const getMovieById = async (id: string) => {
  try {
    const response = await axios.get('https://www.omdbapi.com/', {
      params: {
        apikey: apiKey,
        i: id,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch movie');
  }
};

