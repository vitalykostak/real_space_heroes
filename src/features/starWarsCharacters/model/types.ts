import {Character} from '@/entities/Character';

export type StarWarsCharactersListSchema = {
  count: number;
  page: number;
  perPage: number;
  isLoading: boolean;
  error?: string;
  data: Character[];
};
