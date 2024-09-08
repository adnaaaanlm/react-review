import React from 'react'

export default function Hello(props) { 
       console.log('props',props)

  return (
    <div>hello {props.name}</div>
  )
}
