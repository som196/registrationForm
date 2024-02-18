import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    secondName: '',
    errorMsgF: '',
    errorMsgS: '',
    errorF: false,
    errorS: false,
    isSubmitted: false,
  }

  submitForm = event => {
    event.preventDefault()
    const {firstName, secondName} = this.state
    if (firstName === '' && secondName === '') {
      this.setState({
        errorMsgF: 'Required',
        errorF: true,
        errorMsgS: 'Required',
        errorS: true,
      })
    } else if (secondName === '' && firstName !== '') {
      this.setState({errorMsgS: 'Required', errorS: true})
    } else if (firstName === '' && secondName !== '') {
      this.setState({errorMsgF: 'Required', errorF: true})
    } else {
      this.setState({isSubmitted: true})
    }
  }

  onChangefirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangesecondName = event => {
    this.setState({secondName: event.target.value})
  }

  onBlurfirstName = event => {
    if (event.target.value === '') {
      this.setState({
        errorMsgF: 'Required',
        errorF: true,
      })
    } else {
      this.setState({errorMsgF: '', errorF: false, newclassName: ''})
    }
  }

  onBlursecondName = event => {
    if (event.target.value === '') {
      this.setState({
        errorMsgS: 'Required',
        errorS: true,
      })
    } else {
      this.setState({errorMsgS: '', errorS: false, newclassName: ''})
    }
  }

  firstNameField = () => {
    const {firstName, newclassName} = this.state

    return (
      <div className="render-username-container">
        <label htmlFor="firstName" className="username-label">
          FIRST NAME
        </label>
        <input
          type="text"
          value={firstName}
          id="firstName"
          placeholder="First name"
          className={`username-input ${newclassName}`}
          onChange={this.onChangefirstName}
          onBlur={this.onBlurfirstName}
        />
      </div>
    )
  }

  secondNameField = () => {
    const {secondName} = this.state
    return (
      <div className="render-username-container">
        <label htmlFor="secondName" className="username-label">
          LAST NAME
        </label>
        <input
          type="text"
          value={secondName}
          id="secondName"
          placeholder="Last name"
          className="username-input"
          onChange={this.onChangesecondName}
          onBlur={this.onBlursecondName}
        />
      </div>
    )
  }

  formContainer = () => {
    const {errorMsgF, errorF, errorS, errorMsgS} = this.state
    return (
      <>
        <form className="form-container" onSubmit={this.submitForm}>
          <div>{this.firstNameField()}</div>
          {errorF && <p className="error-msg-container">{errorMsgF}</p>}
          <div>{this.secondNameField()}</div>
          {errorS && <p className="error-msg-container">{errorMsgS}</p>}
          <div className="button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </>
    )
  }

  submitAnotherResponse = () => {
    this.setState({
      firstName: '',
      secondName: '',
      errorMsgF: '',
      errorMsgS: '',
      errorF: false,
      errorS: false,
      isSubmitted: false,
    })
  }

  afterFormSubmitted = () => (
    <div className="after-form-submitted">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p className="submitted-para">Submitted Successfully</p>

      <button
        type="button"
        onClick={this.submitAnotherResponse}
        className="submit-another"
      >
        Submit another response
      </button>
    </div>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="parent-container">
        <h1 className="heading">Registration Form</h1>
        {isSubmitted ? this.afterFormSubmitted() : this.formContainer()}
      </div>
    )
  }
}

export default RegistrationForm
