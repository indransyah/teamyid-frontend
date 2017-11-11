import { combineReducers } from 'redux'
import personalityTest from './personalityTest'
import technicalTest from './technicalTest'
import user from './user'

const app = combineReducers({
  technicalTest,
  personalityTest,
  user
})

export default app