import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  googleSigninStart,
  emailSigninStart,
} from '../../redux/user/user.actions'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import './sign-in.styles.scss'

const SignIn = ({ emailSigninStart, googleSigninStart }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  })

  const { email, password } = userCredentials
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = userCredentials
    emailSigninStart(email, password)
  }
  const handleChange = (event) => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          label="email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign in </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSigninStart}
            isGoogleSignIn
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  googleSigninStart: () => dispatch(googleSigninStart()),
  emailSigninStart: (email, password) =>
    dispatch(emailSigninStart({ email, password })),
})
export default connect(null, mapDispatchToProps)(SignIn)
