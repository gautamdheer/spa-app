import React from 'react'

export const Message = () => {

    const handleEventClick = () => {
        
        console.log("Started now...");

        setTimeout(() => {
                console.log("I am inside now")
        }, 2000);

    }

  return (
    <>
    <h3>Welcome to message component</h3>
    <button onClick={handleEventClick}>Clikc Me</button>
    </>

  )
}
