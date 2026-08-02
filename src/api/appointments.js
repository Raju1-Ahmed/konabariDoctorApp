import apiClient from './client.js'

export const createAppointment = (payload) => apiClient.post('/appointments', payload)
