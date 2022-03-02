import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "f8614ef266064ab3a272b8e9035a38a2";
export const getAllMovies = async (page) => {
  try {
    const res = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`
    );

    return res.data;
  } catch (error) {
    console.log("error while movies api", error);
  }
};
