import { combineReducers } from 'redux'
import personalityTest from './personalityTest'
import technicalTest from './technicalTest'

const app = combineReducers({
  technicalTest,
  personalityTest,
})

export default app