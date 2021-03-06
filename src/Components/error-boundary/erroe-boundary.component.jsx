import React from 'react'
import {
  ErrorImageOverlay,
  ErrorImageContainer,
  ErrorImageText,
} from './error.boundry.styles'
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasErrored: false,
    }
  }
  static getDrivedStateFromError(error) {
    return {
      hasErrored: true,
    }
  }

  componentDidCatch(error, info) {
    console.log(error)
  }
  render() {
    const { hasErrored } = this.state
    if (hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
