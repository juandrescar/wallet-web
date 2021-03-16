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
  return request(`/clients`, 'get')
}

export function get(data) {
  return request(`/clients/balance`, 'post', data)
}

export function register(data) {
  return request(`/clients`, 'post', data)
}

export function recharge(data) {
  return request(`/clients/recharge`, 'post', data)
}

export function pay(data) {
  console.log("API GET", data)
  return request(`/clients/${data.id}/pays/${data.pay}`, 'post', {code: data.code})
}