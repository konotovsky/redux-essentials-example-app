import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'
import { selectCurrentUsername } from '../auth/authSlice'

interface User {
  id: string
  name: string
}

const initialState: User[] = [
  { id: '0', name: 'Tianna Jenkins' },
  { id: '1', name: 'Kevin Grant' },
  { id: '2', name: 'Madison Price' },
]

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  selectors: {
    selectAllUsers: (usersState) => usersState,
    selectUserById: (usersState, userId: string) => usersState.find((user) => user.id === userId),
  },
})

export const { selectAllUsers, selectUserById } = usersSlice.selectors

export const selectCurrentUser = (state: RootState) => {
  const currentUsername = selectCurrentUsername(state)

  return selectUserById(state, currentUsername!)
}

export default usersSlice.reducer
