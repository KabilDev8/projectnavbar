import Head from 'next/head'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <Head>
      <title>Home - My Website</title>
    </Head>
    <div>
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-2 text-gray-700">
        This is the content of the home page. 
     
      </p>
    </div>
  </>
  )
}

export default Navbar
