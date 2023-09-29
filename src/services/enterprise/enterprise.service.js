import axios from 'axios';

const BASE_URL = 'http://localhost:8080';
const USERS_ENDPOINT = '/enterprise';

export const getEnterprises = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${USERS_ENDPOINT}/list`);
      console.log('empresas que vienen:', response)
      return response.data;
    } catch (error) {
      throw error;
    }
};
