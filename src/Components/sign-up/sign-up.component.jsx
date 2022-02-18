import React, { useState } from 'react'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signUpStart } from '../../redux/user/user.actions'
import './sign-up.styles.scss'

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const { email, password, confirmPassword, displayName } = userCredentials

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { displayName, email, password, confirmPassword } = userCredentials

    if (password !== confirmPassword) {
      alert("passwords don't match")
      return
    }
    signUpStart({
      displayName,
      email,
      password,
    })

    setCredentials({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  const handleChange = (event) => {
    const { value, name } = event.target

    setCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <div className="sign-up">
      <h2 className="title">I do not have account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="displayName"
          handleChange={handleChange}
          value={displayName}
          label="displayName"
          required
        />
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
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
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

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredential) => dispatch(signUpStart(userCredential)),
})
export default connect(null, mapDispatchToProps)(SignUp)
