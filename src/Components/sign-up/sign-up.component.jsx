import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
  constructor() {
    super()
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password,
      )

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
    } catch (error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target

    this.setState({ [name]: value })
  }

  render() {
    const { email, password, confirmPassword, displayName } = this.state

    return (
      <div className="sign-up">
        <h2 className="title">I do not have account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="displayName"
            handleChange={(e) => this.handleChange(e)}
            value={displayName}
            label="displayName"
            required
          />
          <FormInput
            name="email"
            type="email"
            handleChange={(e) => this.handleChange(e)}
            value={email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={password}
            handleChange={(e) => this.handleChange(e)}
            label="password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => this.handleChange(e)}
            label="Confirm Password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign Up </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
