const SERVER_BASE_URL = import.meta.env.VITE_SERVER_BASE_URL || ''

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
