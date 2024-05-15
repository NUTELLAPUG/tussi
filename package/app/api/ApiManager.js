import axios from 'axios'

const ApiManager = axios.create({
    baseUrl = 'http://104.238.136.136:3002',
    responseType:'json',
    withCredentials:true
})

export default ApiManager