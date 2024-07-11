import React from 'react'
import "./Home.css"

function Home() {
  return (
    
    <div className='form'>

        CREATE AN ACCOUNT
        <form className='signInForm'>

        <input type="text"  placeholder='Full Name'/>
        <input type="text" placeholder='Email Address' />
        <input type="text" placeholder='password' />
        <input type="text" placeholder='Confirm Passord' />

        <button>Submit</button>

        </form>

    </div>
  )
}

export default Home