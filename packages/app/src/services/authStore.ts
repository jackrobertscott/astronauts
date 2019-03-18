import { createStore } from 'nuggets';

export interface IAuthStore {
  token?: string | null;
}

export const authStore = createStore<IAuthStore>({
  defaults: {
    token: null,
  },
});
