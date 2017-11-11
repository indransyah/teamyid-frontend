import React from 'react'
import { connect } from 'react-redux'
import { getQuestions, addAnswer, setCurrentQuestion } from '../actions/technicalTest'

class TestTechnical extends React.Component {
  handleOnClick = (id) => (e) => {
    const { dispatch } = this.props
    dispatch(addAnswer({
        question_id:  id,
        answer: e.target.value
    }))
  }

  handleOnNext = (index) => (e) => {
    const { dispatch, technicalTest } = this.props
    e.preventDefault()
    if (index < technicalTest.data.length) {
        dispatch(setCurrentQuestion(technicalTest.data[index]))
    } else if (index === technicalTest.data.length){
        console.log('submit', technicalTest.answers)
        window.location.assign('/test-result')
    }
  }

  handleOnBack = (index) => (e) => {
    const { dispatch, technicalTest } = this.props
    e.preventDefault()
    console.log('index', index)
    if (index > 1) {
      dispatch(setCurrentQuestion(technicalTest.data[index - 2]))
    }
  }

  isChecked = (answerName) => {
    const { technicalTest } = this.props
    const answeredQuestion = technicalTest.answers.find(value => {
      return value.question_id === technicalTest.question.id
    })
    return (answeredQuestion && answeredQuestion.answer === answerName) ? true : false
  }

  pagination() {
    return (
      <div className="col-12 section">
        <div className="text-center">
          <div className="nomer"> &#8592; </div>
          <div className="nomer">1</div>
          <div className="nomer">2</div>
          <div className="nomer">3</div>
          <div className="nomer">4</div>
          <div className="nomer">5</div>
          <div className="nomer"> &#8594; </div>
        </div>
      </div>
    )
  }

   componentDidMount() {
    const { dispatch } = this.props
    dispatch(getQuestions())
  }

  render() {
    const { technicalTest } = this.props
    return (
      <div className="container" style={{ paddingTop: '70px' }}>
        <div className="row justify-content-center section">
          <div className="text-center">
            <h2>Technical Test</h2>
            <h6>{technicalTest.question.index} of {technicalTest.data.length} questions</h6>
          </div>
        </div>
        <div className="row justify-content-center section">
          {/*this.pagination()*/}
          <div className="col-12">
            <div className="text-center">
              <h5>{technicalTest.question.question}</h5>
            </div>
          </div>
          <div className="col-md-6 section">
            {
              (technicalTest.question.options && technicalTest.question.options && technicalTest.question.options.map(value => {
                return (
                  <div key={value.id} className="form-check">
                    <label className="form-check-label">
                    <input className="form-check-input" checked={this.isChecked(value.name)} type="radio" name="option" value={value.name} onClick={this.handleOnClick(technicalTest.question.id)}/>
                    {value.option}
                    </label>
                  </div>
                )
              }))
            }
          </div>
        </div>
        <div className="row justify-content-center section">
          <div className="col-md-6">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <a href="" role="button" className="btn btn-light btn-block" onClick={this.handleOnBack(technicalTest.question.index)}>Back</a>
              </div>
              <div className="col-md-6">
                <a href="" role="button" className="btn btn-light btn-block" onClick={this.handleOnNext(technicalTest.question.index)}>Next</a>
              </div>
            </div>
          </div>
        </div>
        {/*
        <div className="row justify-content-center section">
          <div className="col-md-6">
            <a href="/test-result" role="button" className="btn btn-success btn-block">Next Section</a>
          </div>
        </div>
        */}
      </div>
    )
  }
}

export default connect(state => ({
  technicalTest: state.technicalTest
}))(TestTechnical)