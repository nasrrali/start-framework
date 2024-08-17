import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-primary '>
        <div className="container center flex-wrap  text-center text-white py-8">
    <div className='w-full md:w-1/3 p-9'>
    <h3 className='text-3xl font-medium my-2'>LOCATION</h3>
    <p className='my-2'>2215 John Daniel Drive</p>
    <p>Clark, MO 65243</p>
    </div>
    <div className='w-full md:w-1/3 p-9'>
    <h3 className='text-3xl font-medium my-2'>AROUND THE WEB</h3>
    <div className="social center space-x-3">
  <a href='https://www.facebook.com/profile.php?id=100010881736331&mibextid=ZbWKwL' target='_blank'  className="icon border rounded-full w-9 h-9 bg-transparent center tr cursor-pointer  group hover:border-green "><i className='fab fa-facebook tr text-white text-xl group-hover:text-green'></i></a>
  <a href='https://twitter.com/Ahmed_Sayed_Abd' target='_blank'  className="icon border rounded-full w-9 h-9 bg-transparent center tr cursor-pointer  group hover:border-green "><i className='fab fa-linkedin tr text-white text-xl group-hover:text-green'></i></a>
        <a href='https://www.linkedin.com/in/ahmed-sayed-abdelhay' target='_blank'  className="icon border rounded-full w-9 h-9 bg-transparent center tr cursor-pointer  group hover:border-green "><i className='fab fa-twitter tr text-white text-xl group-hover:text-green'></i></a>
        <a href='https://aboabdelhay.github.io/portfolio/' target='_blank'  className="icon border rounded-full w-9 h-9 bg-transparent center tr cursor-pointer  group hover:border-green "><i className='fas fa-globe tr text-white text-xl group-hover:text-green'></i></a>
    </div>
    </div>
    <div className='w-full md:w-1/3 p-9'>
    <h3 className='text-3xl font-medium my-2'>ABOUT FREELANCER</h3>
    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
    </div>
        </div>
        <div className='bg-footer text-center py-4 text-white'>
            <p>Copyright © Your Website 2021</p>
        </div>
    </footer>
  )
}
