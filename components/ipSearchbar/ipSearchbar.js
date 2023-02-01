import Image from "next/image"
import styles from "./ipSearchbar.module.css"

export default function IPSearchbar() {
    const handleChange = () => {

    }
    const handleSubmit = () => {

    }

    return (
        <form className={styles.container}>
            <input className={styles.input} placeholder="Search for any IP address or domain" value="" onChange={handleChange} />
            <button className={styles.btn} type="submit" onSubmit={handleSubmit}>
                <Image className={styles.btn_icon} src="/images/icon-arrow.svg" height={ 14 } width={ 11 } alt="" />
            </button>
        </form>
    )
}