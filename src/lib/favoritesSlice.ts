import { createSlice } from '@reduxjs/toolkit'

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favoriteEvents: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      state.favoriteEvents = [action.payload, ...state.favoriteEvents]
    },
    removeFromFavorites: (state, action) => {
      const indexOfEvent = state.favoriteEvents.findIndex((favoriteEvent) => favoriteEvent.id == action.payload.id)
      let favoriteEventsCopy = [...state.favoriteEvents]
      favoriteEventsCopy.splice(indexOfEvent, 1)
      state.favoriteEvents = favoriteEventsCopy
    },
    clearAllFavorites: (state) => {
      state.favoriteEvents = []
    },
  },
})

export default favoritesSlice