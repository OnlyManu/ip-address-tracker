import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import styles from './ipLocation.module.css'

export default function IPLoaction({position}) {
    const Map = dynamic(() => import('../map/map'), {ssr: false})
    return (
        <div className={styles.container}>
           <Map position={position}/> 
        </div>
    )
}

IPLoaction.propTypes = {
    position: PropTypes.object.isRequired
}