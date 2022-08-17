import Axios from 'axios'

const apiBase = Axios
const tableID = 'app0PTGr4ZVTBeacC'

const api = apiBase.create({
  baseURL: `https://api.airtable.com/v0/${tableID}/`,
  headers: {
    Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
  },
})

export { api }
