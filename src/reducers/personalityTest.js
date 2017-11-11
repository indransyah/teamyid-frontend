import * as types from '../types/personalityTest'

const initialState = {
  isLoading: true,
  data: [],
  question: {},
  answers: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.PERSONALITY_TEST_LOADING_CHANGE:
      return {
        ...state,
        isLoading: action.payload
      }
    case types.PERSONALITY_TEST_DATA_SET:
      return {
        ...state,
        data: action.payload
      }
    case types.PERSONALITY_TEST_QUESTION_SET:
      return {
        ...state,
        question: action.payload
      }
    case types.PERSONALITY_TEST_ANSWER_SET:
      return {
        ...state,
        answers: [
          ...state.answers,
          action.payload
        ]
      }
    default:
      return state
  }
}
