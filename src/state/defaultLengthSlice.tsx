import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type DefaultLengthType = {
  seconds: number
}

const defaultDefaultLength : DefaultLengthType = {
  seconds: 60 * 25
}

const defaultLengthSlice = createSlice({
  name: "defaultLength",
  initialState: defaultDefaultLength,
  reducers: {
    set: (state, action: PayloadAction<DefaultLengthType>) => { state.seconds = action.payload.seconds},
  }
})

export default defaultLengthSlice
export const { set } = defaultLengthSlice.actions
