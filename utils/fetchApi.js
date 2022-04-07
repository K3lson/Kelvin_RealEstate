import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'





export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '91e5750f7cmsh02adef68b0e8478p1e4ce5jsnf2d2483c202a'
          }
    })
    return data;
}