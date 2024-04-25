import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { baseUrl, options } from '../api'

export const getVideosBySearch = createAsyncThunk(
  'videos/fetchBySearch',
  async (searchValue, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const response = await fetch(
        `${baseUrl}/search?query=${searchValue}&geo=EG&lang=en`,
        options,
      )
      const videos = response.json()
      return videos
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

export const getVideosById = createAsyncThunk('videos/fetchById', async (id, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await fetch(`${baseUrl}/video?id=${id}`, options)
    const video = response.json()
    return video
  } catch (error) {
    return rejectWithValue(error.message)
  }
})

export const getRelatedVideos = createAsyncThunk(
  'videos/getRelatedVideos',
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI
    try {
      const response = await fetch(`${baseUrl}/related?id=${id}&geo=EG&lang=en`, options)
      const relatedVideos = response.json()
      return relatedVideos
    } catch (error) {
      return rejectWithValue(error.message)
    }
  },
)

const initialState = {
  searchValue: '',
  videos: {},
  videoDetails: {},
  relatedVideos: {},
  isLoading: false,
  error: null,
}
const videosSlice = createSlice({
  name: 'videos',
  initialState,
  reducers: {
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    videoById: (state, action) => {
      state.videos.data.forEach((ele) => {
        if (ele.videoId === action.payload) {
          state.videoDetails = ele
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder
      //By Search
      .addCase(getVideosBySearch.pending, (state, action) => {
        state.isLoading = true
        state.error = null
        // console.log(action.payload);
      })
      .addCase(getVideosBySearch.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        if (action.payload.message) {
          state.error = action.payload.message
        } else if (action.payload.error) {
          state.error = action.payload.error
        } else {
          state.videos = action.payload
        }
        // console.log(action.payload);
      })
      .addCase(getVideosBySearch.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // console.log(action.payload);
      })
      //By ID
      .addCase(getVideosById.pending, (state, action) => {
        state.isLoading = true
        state.error = null
        // console.log(action.payload);
      })
      .addCase(getVideosById.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        if (action.payload.message) {
          state.error = action.payload.error
        } else if (action.payload.error) {
          state.error = action.payload.error
        } else {
          state.videoDetails = action.payload
        }
        // console.log(action.payload);
      })
      .addCase(getVideosById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // console.log(action.payload);
      })
      //relatedVideos
      .addCase(getRelatedVideos.pending, (state, action) => {
        state.isLoading = true
        state.error = null
        // console.log(action.payload);
      })
      .addCase(getRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false
        state.error = null
        if (action.payload.message) {
          state.error = action.payload.error
        } else if (action.payload.error) {
          state.error = action.payload.error
        } else {
          state.relatedVideos = action.payload
        }
        // console.log(action.payload);
      })
      .addCase(getRelatedVideos.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
        // console.log(action.payload);
      })
  },
})

export const { setSearchValue, videoById } = videosSlice.actions
export default videosSlice.reducer
