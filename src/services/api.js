import axios from 'axios';

const api =  axios.create({
    baseURL: "https://deezerdevs-deezer.p.rapidapi.com/",
    headers: {
      "Content-Type": "application/json",
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
      'x-rapidapi-key': 'ba156038c5msh9df0dc9fd9f7290p1656f4jsnb59df38d4bce'
    }

});

export default api;