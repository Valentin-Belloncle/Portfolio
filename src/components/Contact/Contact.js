import React from 'react'
import './Contact.css'

function Contact() {
  // Envoie email via API Web3Forms//
  const [result, setResult] = React.useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', '6694e727-7970-4364-83e6-3febbda71689')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <section className='section contact center' id='contact'>
      <form onSubmit={onSubmit}>
        <h2 className='section__title'>Contact</h2>
        <div className='inputBox'>
          <label htmlFor='nom'>
            Nom
            <input
              type='text'
              id='nom'
              name='nom'
              className='field'
              placeholder='Nom'
              required
            />
          </label>
        </div>
        <div className='inputBox'>
          <label htmlFor='email'>
            Adresse e-mail
            <input
              type='email'
              name='email'
              id='email'
              className='field'
              placeholder='Email'
              required
            />
          </label>
        </div>
        <div className='inputBox'>
          <label htmlFor='message'>
            Votre message
            <textarea
              name='message'
              id='message'
              className='field message'
              placeholder='Votre message'
              required
            />
          </label>
        </div>
        <button type='submit' className='btn btn--outline'>
          Me contacter
        </button>
      </form>
    </section>
  )
}

export default Contact
