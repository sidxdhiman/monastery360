import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen() {
  const monasteries = [
    { id: 1, name: 'Rumtek Monastery', latitude: 27.3300, longitude: 88.6100 },
    { id: 2, name: 'Tashiding Monastery', latitude: 27.3111, longitude: 88.4455 },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 27.33,
          longitude: 88.61,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5,
        }}
      >
        {monasteries.map((m) => (
          <Marker
            key={m.id}
            coordinate={{ latitude: m.latitude, longitude: m.longitude }}
            title={m.name}
          />
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
