import type { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { UsernameContext } from '../context/UsernameContext'
import { validateString } from '../functions/validate'
import Login from './login'

const Home: NextPage = () => {
  const {username} = useContext(UsernameContext)

  if(!validateString(username))
    return <Login/>

  return (
    <div>
     {username}
    </div>
  )
}

export default Home
