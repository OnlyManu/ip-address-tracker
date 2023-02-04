import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import styles from './alert.module.css'

export default function AlertBox({ children, isOpen, onClick }) {
    const [alertDiv, setAlertDiv] = useState(<div className={isOpen ? styles.alert + " " + styles.open : styles.alert} ></div>)

    const close = () => {
        onClick()
    }

    useEffect(() => {
        setAlertDiv(alertDiv => {
            return createPortal(
                <div className={isOpen ? styles.alert + " " + styles.open : styles.alert} >
                    <div className={styles.alertBox}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" className={styles.alertIcon}>
                            <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 27.17L31.17 34 24 26.83 16.83 34 14 31.17 21.17 24 14 16.83 16.83 14 24 21.17 31.17 14 34 16.83 26.83 24 34 31.17z"/>
                        </svg>
                        <div className={styles.alertText}>
                            <span className={styles.headingAlert}>Oh no!</span>
                            <span className={styles.textAlert}>{ children }</span>
                        </div>
                        <button className={styles.alertButton} onClick={close}>Continue</button>
                    </div>
                    
                </div>,
            document.body) 
        })
    }, [isOpen])
    
    return (
        <>
            {alertDiv}
        </>
    )
}

AlertBox.propTypes = {
    children: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
}