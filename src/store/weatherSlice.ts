// features/weather/weatherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = 'ce5c446d6a094333990104902251907'
const BASE_URL = 'https://api.weatherapi.com/v1/forecast.json'

// AsyncThunk для получения погоды
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (location) => {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        key: API_KEY,
        q: location,
        days: 8,
        lang: 'ru'
      }
    })
    return response.data
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    loading: false,
    error: null,
    current: null,
    forecast: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false
        state.current = action.payload.current
        state.forecast = action.payload.forecast.forecastday
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default weatherSlice.reducer
