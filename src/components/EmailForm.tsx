import { useState } from 'react'

interface EmailFormProps {
  onSubmit: (email: string) => void
}

export function EmailForm({ onSubmit }: EmailFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    
    try {
      await onSubmit(email)
      setEmail('')
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="email-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input
          type="email"
          placeholder="Email"
          className={`email-input ${error ? 'error' : ''}`}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (error) setError('')
          }}
          disabled={isSubmitting}
          aria-label="Enter your email address"
        />
        {error && <div className="error-message">{error}</div>}
      </div>
      <button 
        type="submit" 
        className={`submit-button ${isSubmitting ? 'loading' : ''}`}
        disabled={isSubmitting}
        aria-label="Submit email"
      >
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  )
} 