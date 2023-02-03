import Image from "next/image"
import { useState } from "react"
import styles from "./ipSearchbar.module.css"

export default function IPSearchbar({ handleEvent }) {
    const [ipAddress, setIpAddress] = useState("")

    const isCorrectlyFormated = (ip) => {
        return /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/.test(ip)
    }
    const handleChange = (e) => {
        setIpAddress(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isCorrectlyFormated(ipAddress)) {
            /*await handleEvent(ipAddress)*/
        }
    }

    return (
        <form className={styles.container} method="post"  onSubmit={handleSubmit} >
            <input className={styles.input} placeholder="Search for any IP address or domain" value={ipAddress} onChange={handleChange} />
            <button className={styles.btn} >
                <Image className={styles.btn_icon} src="/images/icon-arrow.svg" height={ 14 } width={ 11 } alt="" />
            </button>
        </form>
    )
}