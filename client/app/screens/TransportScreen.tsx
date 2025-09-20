// TransportScreen.tsx
import { Bus, Car, MapPin, Phone } from 'lucide-react-native';
import React from 'react';
import { Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const TransportScreen = () => {
  const transportOptions = [
    {
      type: 'Taxi / Cab',
      icon: <Car size={24} color="white" />,
      details: 'Local taxis available to all monasteries. Base fare ₹50 + ₹12/km.',
      phone: 'tel:+911234567890',
      bookingLink: 'https://wa.me/911234567890',
    },
    {
      type: 'Bus / Shared Vans',
      icon: <Bus size={24} color="white" />,
      details: 'Shared vans run between major monasteries every 2 hours. Fare ₹30-50 per person.',
      phone: 'tel:+911112223334',
      bookingLink: 'https://wa.me/911112223334',
    },
    {
      type: 'Car Rental / Self Drive',
      icon: <Car size={24} color="white" />,
      details: 'Rent cars for full-day trips. Starting at ₹1500/day.',
      phone: 'tel:+911098765432',
      bookingLink: 'https://wa.me/911098765432',
    },
  ];

  const monasteries = [
    { name: 'Rumtek Monastery', latitude: 27.338, longitude: 88.616 },
    { name: 'Pemayangtse Monastery', latitude: 27.289, longitude: 88.304 },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Transport Options</Text>
      </View>

      {/* Map Section */}
      <View style={styles.mapCard}>
        <MapView
          style={{ flex: 1, borderRadius: 12 }}
          initialRegion={{
            latitude: 27.33,
            longitude: 88.51,
            latitudeDelta: 0.5,
            longitudeDelta: 0.5,
          }}
          showsUserLocation={true}
        >
          {monasteries.map((m, i) => (
            <Marker
              key={i}
              coordinate={{ latitude: m.latitude, longitude: m.longitude }}
              title={m.name}
              description="Monastery Location"
            >
              <MapPin size={24} color="#10B981" />
            </Marker>
          ))}
        </MapView>
      </View>

      {/* Transport Cards */}
      <View style={styles.sectionContainer}>
        {transportOptions.map((option, index) => (
          <View key={index} style={styles.transportCard}>
            <View style={[styles.iconContainer, { backgroundColor: '#10B981' }]}>
              {option.icon}
            </View>
            <View style={{ flex: 1, paddingLeft: 12 }}>
              <Text style={styles.transportType}>{option.type}</Text>
              <Text style={styles.transportDetails}>{option.details}</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  style={styles.callButton}
                  onPress={() => Linking.openURL(option.phone)}
                >
                  <Phone size={16} color="white" />
                  <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.bookButton}
                  onPress={() => Linking.openURL(option.bookingLink)}
                >
                  <Text style={styles.buttonText}>Book</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Travel Tips Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Travel Tips</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>● Best travel times: 8AM - 11AM & 3PM - 6PM to avoid traffic.</Text>
          <Text style={styles.tipText}>● Wheelchair accessible routes available at Rumtek.</Text>
          <Text style={styles.tipText}>● Always carry water and sunscreen for outdoor trips.</Text>
        </View>
      </View>

      {/* Nearby Facilities */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Nearby Facilities</Text>
        <View style={styles.tipCard}>
          <Text style={styles.tipText}>⛽ Petrol stations near Rumtek & Pemayangtse.</Text>
          <Text style={styles.tipText}>🅿️ Parking available at major monasteries.</Text>
          <Text style={styles.tipText}>⚡ EV charging stations at Gangtok city center.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default TransportScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  headerContainer: {
    padding: 16,
    backgroundColor: '#10B981',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: '700' },

  mapCard: {
    height: 220,
    borderRadius: 12,
    margin: 16,
    overflow: 'hidden',
    backgroundColor: '#E5E7EB',
    marginBottom: 16,
  },

  sectionContainer: { marginHorizontal: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#065F46', marginBottom: 8 },

  transportCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transportType: { fontSize: 16, fontWeight: '600', color: '#065F46' },
  transportDetails: { fontSize: 14, color: '#374151', marginVertical: 4 },
  buttonRow: { flexDirection: 'row', marginTop: 6 },
  callButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#10B981',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginRight: 8,
  },
  bookButton: {
    backgroundColor: '#065F46',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  buttonText: { color: 'white', fontSize: 14, fontWeight: '600', marginLeft: 4 },
  tipCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  tipText: { fontSize: 14, color: '#374151', marginBottom: 6 },
});
