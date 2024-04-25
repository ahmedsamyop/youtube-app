const baseUrl = `https://${process.env.REACT_APP_API_HOST}`
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_API_HOST,
  },
}

export { options, baseUrl }
