import React from 'react'
import qrimg from './Images/image-qr-code.png'
import './QrApp.css'

const QR = () => {
  return (
    <>
    
      <div className="card">
        <img src={qrimg} alt="QR Code" />
        <h2>Improve your front-end skills by building projects</h2>
        <p>Scan the QR code to visit Frondend Mentor and take your coding skills to next level</p>
      </div>

    </>
  )
}

export default QR