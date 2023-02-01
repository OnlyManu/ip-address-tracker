import styles from "./ipInfos.module.css"

export default function IPInfos() {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.info_name}>IP Address</span>
                <span className={styles.info_value}>192.212.174.101</span>
            </div>
            <div className={styles.info}>
                <span className={styles.info_name}>Location</span>
                <span className={styles.info_value}>Brooklin, NY 10001</span>
            </div>
            <div className={styles.info}>
                <span className={styles.info_name}>Timezone</span>
                <span className={styles.info_value}>SpaceX Starlink</span>
            </div>
        </div>
    )
}