import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const withSpinner = (WrappedComponenr) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <WrappedComponenr {...otherProps} />
  )
}

export default withSpinner
