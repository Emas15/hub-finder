function About() {
  return (
    <>
      <h1 className='text-6xl mb-4'>Github Finder</h1>
      <p className='mb-4 text-2xl font-light'>
        This is my first react project.
        <a href='https://www.udemy.com/course/modern-react-front-to-back/'>
          {' '}
          i really loved  making this!!!
        </a>{' '}
        git hub finder by
        <strong>
          <a href='https://m.facebook.com/emtiazahmed15'> Emtiaz ahmed siam</a>
        </strong>
        .
      </p>
      <p className='text-lg text-gray-400'>
        Version <span className='text-white'>1.0.0</span>
      </p>
      <p className='text-lg text-gray-400'>
        Layout By:
        <a className='text-white' href=''>
          emtiaz
        </a>
      </p>
    </>
  )
}

export default About
