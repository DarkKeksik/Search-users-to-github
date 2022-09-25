// LS = LocalStorage
export const getAccessTokenLS = window.localStorage.getItem('accessToken') || ''
export const setAccessTokenLS = (value: string) => window.localStorage.setItem('accessToken', value)