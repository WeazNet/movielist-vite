const API_KEY = import.meta.env.VITE_THEMOVIEDB_API_KEY;
export const apiOptions = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

