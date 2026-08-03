import apiClient from './client.js'

export const fetchAdminDoctors = () => apiClient.get('/doctors')
export const fetchAdminDoctor = (id) => apiClient.get(`/doctors/${id}`)
export const createAdminDoctor = (payload) => apiClient.post('/doctors', payload)
export const updateAdminDoctor = (id, payload) => apiClient.put(`/doctors/${id}`, payload)
export const deleteAdminDoctor = (id) => apiClient.delete(`/doctors/${id}`)
export const fetchAdminAppointments = () => apiClient.get('/appointments')
export const deleteAdminAppointment = (id) => apiClient.delete(`/appointments/${id}`)
