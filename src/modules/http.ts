import axios from "axios";

const http = {
  instance: axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  }),

  get(url: string) {
    return this.instance.get(url);
  },

  post(url: string, data: object) {
    return this.instance.post(url, data);
  },

  put(url: string, data: object) {
    return this.instance.put(url, data);
  },

  delete(url: string) {
    return this.instance.delete(url);
  },
};

export default http;
