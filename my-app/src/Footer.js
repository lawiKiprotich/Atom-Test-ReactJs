import React from 'react'
import './index.css'

export default function Footer() {
    return(
        <div>
            <div className='footer--col'>
                    <h2> With Love by Fleeklawi@gmail.com</h2>
            </div>
            <div className='footer--col'>
                <ul>
                    <li>Developers</li>
                    <li>TERMS |</li>
                    <li>CONDITIONS |</li>
                    <li>PRIVACY</li>
                </ul>
            </div>
            <div className='footer--col'>
                <span>SEND US A MESSAGE: <input type='text' /><button>Send</button></span>
            </div>
        </div>
    )
}