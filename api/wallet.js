import Axios from 'axios';

async function request(url, method, data){
  console.log("data", data)
  const response = await Axios({
    method: method,
    url: `${process.env.REACT_APP_API_URL}${url}`,
    responseType: 'json',
    data: data ? data : undefined
  })
  return response.data;
}

export function index() {
  console.log("API GET")
  return request(`/clients`, 'get')
}

export function get(data) {
  console.log("API GET", data)
  return request(`/clients/balance`, 'post', data)
}
