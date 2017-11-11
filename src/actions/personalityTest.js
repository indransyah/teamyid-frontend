import * as types from '../types/personalityTest'
import axios from 'axios'
import config from '../config'

export const changeLoading = status => {
  return {
    type: types.PERSONALITY_TEST_LOADING_CHANGE,
    payload: status
  }
}

export const setQuestions = questions => {
  return {
    type: types.PERSONALITY_TEST_DATA_SET,
    payload: questions
  }
}

export const setCurrentQuestion = question => {
  return {
    type: types.PERSONALITY_TEST_QUESTION_SET,
    payload: question
  }
}

export const addAnswer = answer => {
  return {
    type: types.PERSONALITY_TEST_ANSWER_SET,
    payload: answer
  }
}

const formatQuestions = questions => {
  return questions.map((value, index) => {
    return {
      ...value,
      index: index + 1,
      options: [
        ...Object.keys(value.options).map(key => {
          return {
            id: key,
            name: key,
            option: value.options[key]
          }
        })
      ]
    }
  })
}

// Async
export const getQuestions = () => {
  return (dispatch) => {
    axios(`${config.apiUrl}api/personality-test/random`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      const questions = formatQuestions(res.data.data)
      dispatch(setQuestions(questions))
      dispatch(setCurrentQuestion(questions[0]))
      dispatch(changeLoading(false))
    })
    .catch(err => {
      dispatch(changeLoading(false))
      console.error(err)
    })
  }
}