import { Dimensions, StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MapLocation } from '@/features/map/types';

interface MapProps {
  location: MapLocation;
}

export const Map = ({ location: { address, lat, lng, title } }: MapProps) => {
  const coordinate = {
    latitude: lat,
    longitude: lng
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          ...coordinate,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        mapType="standard"
        minZoomLevel={15}
      >
        <Marker title={title} coordinate={coordinate} description={address} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  }
});
