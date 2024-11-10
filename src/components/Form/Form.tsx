import { Container, ContainerSucces } from './styles'
import { toast, ToastContainer } from 'react-toastify'
import { useEffect, useState, useRef } from 'react'
import validator from 'validator'
import emailjs from 'emailjs-com'
import { ValidationError } from '@formspree/react'

export function Form() {
  const [validEmail, setValidEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [state, setState] = useState({
    succeeded: false,
    submitting: false,
    errors: [],
  })

  // Create a reference for the form
  const form = useRef<HTMLFormElement>(null)

  // Function to validate email
  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  // Function to send email using EmailJS
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    // Set submitting to true
    setState((prevState) => ({ ...prevState, submitting: true }))

    if (form.current) {
      // Send form data using emailjs
      emailjs
        .sendForm(
          'service_erpitod',           // Replace with your EmailJS Service ID
          'template_ei1cb8m',          // Replace with your EmailJS Template ID
          form.current,                // Reference to the form
          'wki1KZiq3aZf1IJZc'         // Replace with your public key (User ID is not needed here)
        )
        .then(
          () => {
            console.log('SUCCESS!')
            setState((prevState) => ({ ...prevState, succeeded: true }))
            toast.success('Email sent successfully!', {
              position: toast.POSITION.BOTTOM_LEFT,
              pauseOnFocusLoss: false,
              closeOnClick: true,
              hideProgressBar: false,
              toastId: 'succeeded',
            })
          },
          (error) => {
            console.log('FAILED...', error.text)
            toast.error('Failed to send email.', {
              position: toast.POSITION.BOTTOM_LEFT,
              pauseOnFocusLoss: false,
              closeOnClick: true,
              hideProgressBar: false,
              toastId: 'failed',
            })
          }
        )
        .finally(() => {
          setState((prevState) => ({ ...prevState, submitting: false }))
        })
    }
  }

  // Show success message when email is successfully sent
  useEffect(() => {
    if (state.succeeded) {
      toast.success('Email successfully sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  }, [state.succeeded])

  // Success page after submission
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button className="button"
          type="submit"
          disabled={!validEmail || !message || state.submitting}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
