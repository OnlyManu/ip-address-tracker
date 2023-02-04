import PropTypes from 'prop-types'
import styles from "./ipInfos.module.css"

export default function IPInfos({IPLocationData}) {
    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <span className={styles.info_name}>IP ADDRESS</span>
                <span className={styles.info_value}>{IPLocationData.ip}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.info_name}>LOCATION</span>
                <span className={styles.info_value}>{IPLocationData.location}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.info_name}>TIMEZONE</span>
                <span className={styles.info_value}>{IPLocationData.timezone}</span>
            </div>
            <div className={styles.info}>
                <span className={styles.info_name}>ISP</span>
                <span className={styles.info_value}>{IPLocationData.isp}</span>
            </div>
        </div>
    )
}

IPInfos.propTypes = {
    IPLocationData: PropTypes.object.isRequired
}