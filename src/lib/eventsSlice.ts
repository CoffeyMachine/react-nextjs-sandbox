import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchAllEvents = createAsyncThunk('fetch-all-events', async () => {
  const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=AgaOIhn82BpAEl8gZbX7aQbhfAWzJ2tY')
  return response.json()
})

const eventsSlice = createSlice({
  name: 'events',
  initialState: { data: [], fetchStatus: '' },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEvents.fulfilled, (state, action) => {
        state.data = action.payload
        state.fetchStatus = 'success'
      })
      .addCase(fetchAllEvents.pending, (state) => {
        state.fetchStatus = 'loading'
      })
      .addCase(fetchAllEvents.rejected, (state) => {
        state.data = JSON.parse('{}')
        state.fetchStatus = 'error'
      })
  },
})

export default eventsSlice