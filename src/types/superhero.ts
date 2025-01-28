export interface Superhero {
  id: string;
  name: string;
  superpower: string;
  humilityScore: number;
}

export interface PaginatedResponse {
  data: Superhero[];
  meta: {
    total: number;
    page: number;
    lastPage: number;
    limit: number;
  };
}
