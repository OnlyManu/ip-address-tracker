import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import { iconMarker } from './icon';
import styles from './map.module.css'
import 'leaflet/dist/leaflet.css';

export default function Map({position}) {
    return (
        <MapContainer className={styles.container} center={[position.lat + 0.010, position.lng]} zoom={13} scrollWheelZoom={false} zoomControl={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.lat, position.lng]} icon={iconMarker}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}