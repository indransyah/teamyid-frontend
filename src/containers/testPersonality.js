import React from 'react'
import { connect } from 'react-redux'

import { getQuestions, addAnswer, setCurrentQuestion } from '../actions/personalityTest'

class TestPersonality extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionId: 0,
      answer: ''
    }
  }

  handleOnClick = (id) => (e) => {
    this.setState({
      questionId: id,
      answer: e.target.value
    })
  }

  handleOnNext = (index) => (e) => {
    const { dispatch, personalityTest } = this.props
    e.preventDefault()
    dispatch(addAnswer({
        question_id:  this.state.questionId,
        answer: this.state.answer
    }))
    this.setState({
        questionId: 0,
        answer: ''
    })
    if (index < personalityTest.data.length) {
      dispatch(setCurrentQuestion(personalityTest.data[index]))
    } else if (index === personalityTest.data.length){
        window.location.assign('/test-result')
    }
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getQuestions())
  }

  render() {
    const { personalityTest } = this.props
    return (
      <div className="container" style={{ paddingTop: '70px' }}>
        <div className="row justify-content-center">
          <div className="text-center">
            <h2>Personality Test</h2>
            <h6>{personalityTest.question.index} of {personalityTest.data.length} questions</h6>
          </div>
        </div>
        <div className="row justify-content-center section">
          <div className="col-12 section text-center">
            <h5>{personalityTest.question.question}</h5>
          </div>
          <div className="col-md-6">
            {personalityTest.question.options && personalityTest.question.options.map(option => {
              return(
                <div key={option.id} className="form-check">
                  <label className="form-check-label">
                    <input className="form-check-input" checked={this.state.answer === option.name} type="radio" name="option" value={option.name} onClick={this.handleOnClick(personalityTest.question.id)}/>
                    {option.option}
                  </label>
                </div>
              )
            })}
          </div>
        </div>
        <div className="row justify-content-center section">
          <div className="col-md-6">
            <a href="" role="button" className={(this.state.questionId === 0 || this.state.answer === '') ? 'btn btn-success btn-block disabled' : 'btn btn-success btn-block'} onClick={this.handleOnNext(personalityTest.question.index)}>{(personalityTest.question.index === personalityTest.data.length) ? 'Finish' : 'Next' }</a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  personalityTest: state.personalityTest
}))(TestPersonality)