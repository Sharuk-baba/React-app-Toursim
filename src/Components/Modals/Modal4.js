import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
  position: 'fixed',
  top: '22%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'rgba(0, 0, 0, .012)',
  padding: '50px',
  zIndex: 1000,
  
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.9)',
  zIndex: 1000
  
}

function Modal4({ open, children, onClose }) {

    if (!open) return null

    return ReactDom.createPortal(
      <>
        <div style={OVERLAY_STYLES}  />
        <div style={MODAL_STYLES}>
          <button onClick={onClose} style={{marginTop:'250px' ,marginBottom:'0px',borderRadius:"10px" }}>Close</button>
          {children}
        </div>
      </>,
      document.getElementById('portal4'))
  
}

export default Modal4