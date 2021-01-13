import axios from "axios";

const API_URL = 'https://ricardo-aulas-sds2.herokuapp.com';

export function fetchOrders() {
    return axios(`${API_URL}/orders`)
}