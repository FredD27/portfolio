import axios from "axios";

export default class ApiService {
  #token;

  constructor() {
    this.#token = localStorage.getItem("token");
  }

  getToken() {
    return this.#token;
  }

  setToken(token) {
    this.#token = token;

    return this;
  }

  getConfig() {
    const config = { headers: {} };

    if (this.#token) {
      config.headers.Authorization = `bearer ${this.#token}`;
    }

    return config;
  }

  async get(url) {
    return axios.get(url, this.getConfig());
  }

  async post(url, content) {
    const { data } = await axios.post(url, content, this.getConfig());
    return data;
  }

  async delete(url) {
    return axios.delete(url, this.getConfig());
  }

  async update(url, content) {
    const { data } = await axios.put(url, content, this.getConfig());
    return data;
  }

  isAuthenticated() {
    return !!this.#token;
  }
}
