import { useState } from 'react'
import './Page.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    alert('Mensaje enviado correctamente')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="page">
      <h1>Contacto</h1>
      <div className="content">
        <section className="section">
          <p>
            Puedes contactarnos a través del siguiente formulario. Estaremos
            encantados de responder tus consultas.
          </p>
        </section>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact

