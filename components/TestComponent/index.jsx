import React from 'react'

const TestComponent = (props) => {
  return (
    <div>{JSON.stringify(props.data)}</div>
  )
}

export default TestComponent