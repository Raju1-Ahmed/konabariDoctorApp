import apiClient from './client.js'

export const fetchAdminDoctors = () => apiClient.get('/doctors')
export const fetchAdminDoctor = async (id) => {
  try {
    return await apiClient.get(`/doctors/${id}`)
  } catch (error) {
    const fallbackResponse = await apiClient.get('/doctors')
    const doctor = fallbackResponse.data.data?.find((entry) => entry._id === id)

    if (!doctor) {
      throw error
    }

    return {
      data: {
        data: doctor,
      },
    }
  }
}
export const createAdminDoctor = (payload) => apiClient.post('/doctors', payload)
export const updateAdminDoctor = (id, payload) => apiClient.put(`/doctors/${id}`, payload)
export const deleteAdminDoctor = (id) => apiClient.delete(`/doctors/${id}`)
export const fetchAdminAppointments = () => apiClient.get('/appointments')
export const deleteAdminAppointment = (id) => apiClient.delete(`/appointments/${id}`)
