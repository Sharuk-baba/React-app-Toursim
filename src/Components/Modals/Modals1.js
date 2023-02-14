import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '45%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, .01)',
  padding: '3.125rem',
  zIndex: 1000
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000
}

function Modal1({ open, children, onClose }) {

    if (!open) return null

    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
          <button onClick={onClose} style={{marginTop:'6.25rem' ,marginBottom:'0rem',borderRadius:"0.625rem",fontSize:"1.25rem",width:"3.75rem",height:"2.5rem"}}>Close</button>
          {children}
        </div>
      </>,
      document.getElementById('portal3'))
  
}

export default Modal1