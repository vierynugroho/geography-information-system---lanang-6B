import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import kost from '../../../public/data/kost';

const DashboardIndex: React.FC = () => {
  let customIcon = new Icon({
    iconUrl:
      'https://cdn.iconscout.com/icon/premium/png-512-thumb/hostel-10436205-8408876.png?f=webp&w=256',
    iconSize: [30, 30],
  });
  return (
    <>
      <div className="mt-4 min-h-screen w-full">
        <MapContainer
          center={[-8.0985531, 112.1813927]}
          zoom={13}
          scrollWheelZoom={false}
          doubleClickZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> LANANG 6B - RPL'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {kost.map((kost) => (
            <Marker
              position={[kost.coordinate.lang, kost.coordinate.len]}
              icon={customIcon}
            >
              <Popup>
                <div>
                  <strong>Nama Kost:</strong> {kost.name} <br />{' '}
                  <strong>Detail Kost:</strong> {kost.detail} <br />{' '}
                  <strong>Tipe Kost: </strong> {kost.type}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default DashboardIndex;
