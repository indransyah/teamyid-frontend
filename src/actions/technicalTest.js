import axios from 'axios'
import * as types from '../types/technicalTest'
import config from '../config'

export const changeLoading = status => {
  return {
    type: types.TECHNICAL_TEST_LOADING_CHANGE,
    payload: status
  }
}

export const setQuestions = questions => {
  return {
    type: types.TECHNICAL_TEST_DATA_SET,
    payload: questions
  }
}

export const setCurrentQuestion = question => {
  return {
    type: types.TECHNICAL_TEST_QUESTION_SET,
    payload: question
  }
}

export const addAnswer = answer => {
  return {
    type: types.TECHNICAL_TEST_ANSWER_SET,
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
    dispatch(changeLoading(true))
    axios(`${config.apiUrl}api/technical-test/random?category=programmer`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      // console.log(res.data)
      const questions = formatQuestions(res.data.data)
      dispatch(setQuestions(questions))
      dispatch(setCurrentQuestion(questions[0]))
      dispatch(changeLoading(false))
    })
    .catch((err) => {
      dispatch(changeLoading(false))
      console.error(err)
    })
  }
}

export const postAnswers = (answers) => {
  return (dispatch) => {
    dispatch(changeLoading(true))
    axios.post(`${config.apiUrl}api/technical-test/answers`, {
      answers
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      console.log('after submit', res.data)
      dispatch(changeLoading(false))
      // window.location.assign('/welcome')
    })
    .catch(err => {
      dispatch(changeLoading(false))
      console.error(err)
    })
  }
}