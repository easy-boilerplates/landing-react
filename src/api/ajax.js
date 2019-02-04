const apiProvider = {
  GITHUB: 1
}

const {
  REACT_APP_API_GITHUB
} = process.env

const urls = {
  [apiProvider.GITHUB]: REACT_APP_API_GITHUB
}

export const callApi = (url, {
  provider
} = {}) => {
  let baseUrl = urls[provider ? provider : apiProvider.GITHUB]

  return fetch(`${baseUrl}${url}`).then(res => res.json())
}