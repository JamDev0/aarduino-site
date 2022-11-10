import axios from "axios";

export const api = axios.create({
  baseURL: 'https://sweltering-humane-bicycle.glitch.me/'
})