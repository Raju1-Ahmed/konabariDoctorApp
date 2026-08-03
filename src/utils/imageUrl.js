const FALLBACK_API_BASE_URL = 'https://konabarilabaidserver-psi.vercel.app/api'
const configuredApiBaseUrl = import.meta.env.VITE_API_BASE_URL || FALLBACK_API_BASE_URL
const configuredServerBaseUrl = import.meta.env.VITE_SERVER_BASE_URL || configuredApiBaseUrl.replace(/\/api\/?$/, '')
const SERVER_BASE_URL = configuredServerBaseUrl.replace(/\/$/, '')

export function resolveImageUrl(source) {
  if (!source) return ''

  if (source.startsWith('http://') || source.startsWith('https://') || source.startsWith('data:') || source.startsWith('blob:')) {
    return source
  }

  if (source.startsWith('/uploads/')) {
    return SERVER_BASE_URL ? `${SERVER_BASE_URL}${source}` : source
  }

  return source
}
