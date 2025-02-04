import React from 'react'

export default function Users() {

  const employee = {
    name:"gautamdheer",
    email:"gautam.litesh@gmail.com"
  }
  return (
    <h1>Welcome {employee.name} user on the {employee.email} website....</h1>
  )
}
