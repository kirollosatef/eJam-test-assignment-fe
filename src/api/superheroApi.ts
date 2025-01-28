import axios from "axios";
import { Superhero, PaginatedResponse } from "../types/superhero";

const API_URL = "http://localhost:3000";

export const superheroApi = {
  create: async (superhero: Omit<Superhero, "id">): Promise<Superhero> => {
    const response = await axios.post(`${API_URL}/superheroes`, superhero);
    return response.data;
  },

  getAll: async (page: number = 1, limit: number = 5): Promise<PaginatedResponse> => {
    const response = await axios.get(`${API_URL}/superheroes`, {
      params: { page, limit },
    });
    return response.data;
  },
};
