import * as types from '../types/personalityTest'
import axios from 'axios';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6Ijg2ZDFkNmYyZTY5Y2Q0YmU1OGE0YTgxYTUzZmEzMDE4ZjA5NjBmMGU3Njc4YWVkYjhhMzJlOGEzMTMwMTI3MGI2YzMyMmU0ZmNmYzcwYmE2In0.eyJhdWQiOiIxIiwianRpIjoiODZkMWQ2ZjJlNjljZDRiZTU4YTRhODFhNTNmYTMwMThmMDk2MGYwZTc2NzhhZWRiOGEzMmU4YTMxMzAxMjcwYjZjMzIyZTRmY2ZjNzBiYTYiLCJpYXQiOjE1MTAzODExODQsIm5iZiI6MTUxMDM4MTE4NCwiZXhwIjoxNTQxOTE3MTg0LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.YCW6y1VpSEFUSDF5EqTI1_-NzVjj3pmgCg5WjOD7_cHm315_G9Xj6rt7pfI3Oi0I9WJ-XusYXQi8fRqEm2ke-FT_a9aMLA1kzFC9dRB09oMlnKdjNGUMkZ_JIOSzR5x7_lflDSB4gHDo-N55dBPtlRSaiwDTVGhOG6EkWx9YaLiWvcUwexZoYV1Y833tiJaBTn6Uq0dOsA0tTLilT9JPrqwT8KM3CpmltNvlKDKtiqjlQoGYBJ8BKQ70HeBapskBUIkufv0YrKsDSv4EH42UOeIVZp-l9ie4Do9eOAsrUjBddQ6itrJDBW2ydjOdyThT3_CiF0K2LR9cV9-WZYus3LOnn6MEVQ7lK-23ZcuvucRoAcw9uoYC1jRfgXF9KTFO88I__fLhGvRjofG7D-iDnteTdO9lC7cCS-9mjfh2qs9PDMybLZCx3b7V8MtNtYhJ0wo2bfbHj7r_GMaeI-z5bld6S-5YLRo7XJynNKrLxH24uAjQ5R53H2iuNG8gWXjEcRzRoedBDAuKL-7tD0aLardZ2cxAzwgInIF7AB-WK10OQqTlEtZonwqB3GfZpjYUTAMdLHBCiMJPCnQLXHy8ow3qdVecoVAoeUDWx2qc3g6C73JqXpPobkB5HHBY61ipMb87qKaFiTVf54KxTRenTv14qWnGy_ryEyUxjRBjYKo'

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

   const request = axios.get('http://teamyidstaging.ngedev.com/api/personality-test/random', { headers: {Authorization : `Bearer ${token}`} })
        .then((response) => {
        console.log(response)
    }).catch((error) => {
        console.log(error)
    })

  return (dispatch) => {
    fetch('http://teamyidstaging.ngedev.com/api/personality-test/random',{ headers: {Authorization : `Bearer ${token}` } })
    .then(res => res.json())
    .then(res => {
      const questions = formatQuestions(res)
      dispatch(setQuestions(questions))
      dispatch(setCurrentQuestion(questions[0]))
      dispatch(changeLoading(false))
    })
    .catch(err => {
      dispatch(changeLoading(false))
      console.error(err)
    })
    // fetch('http://teamyidstaging.ngedev.com/api/personality-test/random', {
    //   method: 'GET',
    //   // mode: 'no-cors',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Origin': '',
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFjODdkNTk1ZGM2MGE1NjMyNDlkOTg2NDBmNDcyZTJjNThmYjU5YzY0YjA5NmQyMmI0OTJhNDA0OWM5N2Q5NzhhMmM5YTU4OTAyYTY0ODRiIn0.eyJhdWQiOiIxIiwianRpIjoiMWM4N2Q1OTVkYzYwYTU2MzI0OWQ5ODY0MGY0NzJlMmM1OGZiNTljNjRiMDk2ZDIyYjQ5MmE0MDQ5Yzk3ZDk3OGEyYzlhNTg5MDJhNjQ4NGIiLCJpYXQiOjE1MTAyOTg2NjgsIm5iZiI6MTUxMDI5ODY2OCwiZXhwIjoxNTQxODM0NjY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mkSQS5ZheTqGA21Zaarp38PX7ZCJ8eUw_YSQiU33dsiHhmcARy76b10WS9cPy37pWkhYP16eMryLBSXYT53-AZuxAkhxOK_mYh5RiZwUyPDwu51FdwUibVQB4e56rIGC8635NnYCQ3euUZ1VTg7xgvtjE0N-QBQyrz_V_bU0jvWPpg1WJJhPE04b_rFiAxLVEvKthzVS8ElZbNuvp0Egui3KhWtV_2wKDR5luJNyHojcqkn-0rpKkdpUsQ3w8yua5pWQG-027aODQvb5Tvjp5FQs8J5n0poL3rRzx6nPq05KFlbJxUF_BNPpZgFP8laBwnWOBnsHohXUshMOd8jQxYOluxOMUBYRH9QtXu9NhYXz92PwmlhXmtwlzrvba-R8xiqpBFD8uKrV68aZzPBCH5aRjxtFWSuzoXO5gx7fQHRrjDG31rTCa0E9xQWLmC0ydSwFWocW8Gt-nGC3CYc2D4wkyTyBwILxH_FNE8iWCgv5RtIHzviovsVtbwM7bv79Bd7_LqMYetmTuCLkQLEsrLxJB__P-XKwlQ3aiYDSQKP1I5L4ORZHuSRfpF2uKNLiw0NbFyFIttgocCnH6RBEFXvVEJu7LlB4VSYFqiWUkQxqqrCopTdeyVyCDZ24d9R5iJhuaXC9DV-No6b1bwLHYaLPSogDXUbnVZ_pInFww3E'
    //   }
    // }).then(res => {
    //     console.log(res)
    //     return res.text()
    //   })
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(console.log)


    // const headers = new Headers()
    //   headers.append('accept', 'application/json')
    //   headers.append('authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjFjODdkNTk1ZGM2MGE1NjMyNDlkOTg2NDBmNDcyZTJjNThmYjU5YzY0YjA5NmQyMmI0OTJhNDA0OWM5N2Q5NzhhMmM5YTU4OTAyYTY0ODRiIn0.eyJhdWQiOiIxIiwianRpIjoiMWM4N2Q1OTVkYzYwYTU2MzI0OWQ5ODY0MGY0NzJlMmM1OGZiNTljNjRiMDk2ZDIyYjQ5MmE0MDQ5Yzk3ZDk3OGEyYzlhNTg5MDJhNjQ4NGIiLCJpYXQiOjE1MTAyOTg2NjgsIm5iZiI6MTUxMDI5ODY2OCwiZXhwIjoxNTQxODM0NjY4LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.mkSQS5ZheTqGA21Zaarp38PX7ZCJ8eUw_YSQiU33dsiHhmcARy76b10WS9cPy37pWkhYP16eMryLBSXYT53-AZuxAkhxOK_mYh5RiZwUyPDwu51FdwUibVQB4e56rIGC8635NnYCQ3euUZ1VTg7xgvtjE0N-QBQyrz_V_bU0jvWPpg1WJJhPE04b_rFiAxLVEvKthzVS8ElZbNuvp0Egui3KhWtV_2wKDR5luJNyHojcqkn-0rpKkdpUsQ3w8yua5pWQG-027aODQvb5Tvjp5FQs8J5n0poL3rRzx6nPq05KFlbJxUF_BNPpZgFP8laBwnWOBnsHohXUshMOd8jQxYOluxOMUBYRH9QtXu9NhYXz92PwmlhXmtwlzrvba-R8xiqpBFD8uKrV68aZzPBCH5aRjxtFWSuzoXO5gx7fQHRrjDG31rTCa0E9xQWLmC0ydSwFWocW8Gt-nGC3CYc2D4wkyTyBwILxH_FNE8iWCgv5RtIHzviovsVtbwM7bv79Bd7_LqMYetmTuCLkQLEsrLxJB__P-XKwlQ3aiYDSQKP1I5L4ORZHuSRfpF2uKNLiw0NbFyFIttgocCnH6RBEFXvVEJu7LlB4VSYFqiWUkQxqqrCopTdeyVyCDZ24d9R5iJhuaXC9DV-No6b1bwLHYaLPSogDXUbnVZ_pInFww3E')
    // return fetch('http://teamyidstaging.ngedev.com/api/personality-test/random', {
    //   mode: 'cors',
    //   headers: headers
    // })
    // .then(res => {
    //   console.log('res', res)
    //   return res.json()
    // })
    // .then(res => {
    //   const questions = formatQuestions(res)
    //   dispatch(setQuestions(questions))
    //   dispatch(setCurrentQuestion(questions[0]))
    //   dispatch(changeLoading(false))
    // })
    // .catch((err) => {
    //   dispatch(changeLoading(false))
    //   console.error(err)
    // })
  }
}