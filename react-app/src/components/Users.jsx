import React from 'react'

export default function Users(props) {

  const employee = {
    name:"gautamdheer",
    email:"gautam.litesh@gmail.com"
  }
  return (
    <h1>Welcome {props.name} user on the {props.email} website....</h1>
  )
}
