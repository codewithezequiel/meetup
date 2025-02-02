import { View } from 'react-native';
import Mapbox, { Camera, LocationPuck } from '@rnmapbox/maps';

Mapbox.setAccessToken(process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN!);

export default function EventsMapView() {
  return (
    <View className="flex-1 bg-red-400">
      <Mapbox.MapView className="h-full w-full flex-1" style={{ height: '100%' }}>
        <Camera followZoomLevel={10} followUserLocation />
        <LocationPuck puckBearingEnabled puckBearing="heading" pulsing={{ isEnabled: true }} />
      </Mapbox.MapView>
    </View>
  );
}
