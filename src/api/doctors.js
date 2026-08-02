import apiClient from './client.js'

export const fetchPublicDoctors = () => apiClient.get('/doctors')
