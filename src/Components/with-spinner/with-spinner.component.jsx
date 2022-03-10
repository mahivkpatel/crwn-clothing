import React from 'react'
import Spinner from '../spinner/spinner.component'
import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles'

const withSpinner = (WrappedComponenr) => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedComponenr {...otherProps} />
}

export default withSpinner
