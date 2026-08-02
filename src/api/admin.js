import apiClient from './client.js'

export const fetchAdminDoctors = () => apiClient.get('/admin/doctors')
export const fetchAdminDoctor = (id) => apiClient.get(`/admin/doctors/${id}`)
export const createAdminDoctor = (payload) => apiClient.post('/admin/doctors', payload)
export const updateAdminDoctor = (id, payload) => apiClient.put(`/admin/doctors/${id}`, payload)
export const deleteAdminDoctor = (id) => apiClient.delete(`/admin/doctors/${id}`)
export const fetchAdminAppointments = () => apiClient.get('/admin/appointments')
export const deleteAdminAppointment = (id) => apiClient.delete(`/admin/appointments/${id}`)
