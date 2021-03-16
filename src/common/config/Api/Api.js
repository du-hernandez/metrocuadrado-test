import axios from 'axios'
import Environment from '../Environment/Environment'

class Api {

    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    params = {
        key: Environment.get('API_KEY'),
    }
    timeout = 10000

    axiosInstance = axios.create({
        baseURL: Environment.get('API_URL'),
        timeout: this.timeout,
        headers: this.headers,
        params: this.params
    })

    setParams(params) {
        this.params = { ...this.params, ...params }
    }

    setHeaders(headers) {
        this.headers = { ...this.headers, ...headers }
    }

    rewind() {
        this.axiosInstance = axios.create({
            baseURL: Environment.get('API_URL'),
            timeout: this.timeout,
            headers: this.headers,
            params: this.params
        })
    }

    async get(route, params) {
        this.setParams(params)
        return await this.axiosInstance.get(route, {
            params: this.params
        })
    }
}

export default new Api()