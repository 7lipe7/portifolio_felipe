import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './style/footer.css'

import githubIcon from '../assets/icons8-github-96.png'
import linkedinIcon from '../assets/icons8-linkedin-96.png'
import emailIcon from '../assets/icons8-baixar-32.png'

const Footer = () => {
  const formRef = useRef()
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })

    emailjs
      .sendForm(
        'service_7fzmzam',
        'template_r7ftzq7',
        formRef.current,
        't3xpFHcUaFXwPjm3Z'
      )
      .then(
        (result) => {
          console.log('EmailJS sucesso:', result.text)
          setStatus({
            type: 'success',
            message: 'Mensagem enviada com sucesso! Respondo em até 24h...',
          })
          formRef.current.reset()
        },
        (error) => {
          console.error('Erro detalhado EmailJS:', error)
          if (error.status === 400) {
            setStatus({
              type: 'error',
              message: 'Erro de configuração do servico de email. Verifique as credenciais no EmailJS.',
            })
          } else {
            setStatus({
              type: 'error',
              message: 'Ocorreu um erro ao enviar. Tenta novamente mais tarde.',
            })
          }
        }
      )
      .finally(() => setLoading(false))
  }

  return (
    <footer className="footer-section" id="contato">
      <div className="footer-container">
        <h3 className="footer-title"> Contato</h3>

        <div className="footer-content">
          <div className="footer-left">
            <h2>
              Vamos <span className="highlight">conversar</span>
            </h2>
            <p>
              Estou aberto a novos projetos, parcerias e oportunidades.
              Manda uma mensagem — respondo em ate 24h.
            </p>

            <div className="footer-social">
              <a
                href="https://github.com/7lipe7"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <img src={githubIcon} alt="GitHub" />
              </a>
              <a
                href="https://www.linkedin.com/in/felipe-santana-lopes-76ba77244/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
             
              
            </div>
          </div>

          <div className="footer-right">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <div className="form-group">
                <label htmlFor="user_name">Nome</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="user_email">E-mail</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  placeholder="seu@email.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Conte-me sobre seu projeto..."
                  required
                />
              </div>

              <button type="submit" className="btn-submit" disabled={loading}>
                {loading ? 'Enviando...' : ' Enviar mensagem'}
              </button>

              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
