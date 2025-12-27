import { useEffect, useRef } from 'react'
import './Countdown.css'

function Countdown() {
  const daysRef = useRef(null)
  const hoursRef = useRef(null)
  const minutesRef = useRef(null)
  const secondsRef = useRef(null)

  useEffect(() => {
    // Fecha objetivo: 7 días desde ahora (siempre habrá ofertas activas)
    const targetDate = new Date()
    targetDate.setDate(targetDate.getDate() + 7)
    targetDate.setHours(23, 59, 59, 999)

    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate.getTime() - now

      if (distance < 0) {
        // Si el tiempo se agotó, reiniciar para otros 7 días
        targetDate.setDate(targetDate.getDate() + 7)
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      if (daysRef.current) daysRef.current.textContent = String(days).padStart(2, '0')
      if (hoursRef.current) hoursRef.current.textContent = String(hours).padStart(2, '0')
      if (minutesRef.current) minutesRef.current.textContent = String(minutes).padStart(2, '0')
      if (secondsRef.current) secondsRef.current.textContent = String(seconds).padStart(2, '0')
    }

    // Actualizar inmediatamente
    updateCountdown()

    // Actualizar cada segundo
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="countdown-banner">
      <div className="countdown-content">
        <span className="countdown-label">⚡ Ofertas Especiales - Terminan en:</span>
        <div className="countdown-timer">
          <div className="countdown-item">
            <span className="countdown-value" ref={daysRef}>00</span>
            <span className="countdown-unit">Días</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-value" ref={hoursRef}>00</span>
            <span className="countdown-unit">Horas</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-value" ref={minutesRef}>00</span>
            <span className="countdown-unit">Min</span>
          </div>
          <span className="countdown-separator">:</span>
          <div className="countdown-item">
            <span className="countdown-value" ref={secondsRef}>00</span>
            <span className="countdown-unit">Seg</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown

