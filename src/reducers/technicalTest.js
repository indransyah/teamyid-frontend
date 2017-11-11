import * as types from '../types/technicalTest'

const initialState = {
  isLoading: true,
  data: [],
  question: {},
  answers: []
}

function addAnswer(data, answer) {
  console.log('addAnwer', data, answer)
  const index = data.findIndex((value) => {
    return value.question_id === answer.question_id
  })
  if (index < 0) {
    return [
      ...data,
      answer
    ]
  } else {
    return [
      ...data.slice(0, index),
      answer,
      ...data.slice(index + 1)
    ]
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.TECHNICAL_TEST_LOADING_CHANGE:
      return {
        ...state,
        isLoading: action.payload
      }
    case types.TECHNICAL_TEST_DATA_SET:
      return {
        ...state,
        data: action.payload
      }
    case types.TECHNICAL_TEST_QUESTION_SET:
      return {
        ...state,
        question: action.payload
      }
    case types.TECHNICAL_TEST_ANSWER_SET:
      return {
        ...state,
        answers: addAnswer([...state.answers], action.payload)
      }
    default:
      return state
  }
}
