import React from 'react'
import s from './ErrorPage.module.css'
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function ErrorPage() {

    const navigate = useNavigate()
    
    return (
        <div className={`${s.notFoundPage}`}>
            <div className={`${s.error}`}></div>
            <h2>Page not Found</h2>
            <p>We’re sorry, the page you requested could not be found.<br />
                Please go back to the homepage.</p>
            <Link className={s.HomeButton} to='/'>Go home</Link>
        </div>
    )
}