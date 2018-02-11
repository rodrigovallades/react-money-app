import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

export function getSummary() {
  const request = axios.get(`${BASE_URL}/billingCycles/summary`)
  return {
    type: 'BILLINGSUMMARY_FETCHED',
    payload: request
  }
}
