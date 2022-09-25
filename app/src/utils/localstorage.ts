// LS = LocalStorage
export const getAccessTokenLS: string = window.localStorage.getItem('accessToken') || ''
export const setAccessTokenLS: (value: string) => void = (value) => window.localStorage.setItem('accessToken', value)