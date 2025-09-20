// // import { BlurView } from '@react-native-community/blur';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { BlurView } from 'expo-blur';
// import React from 'react';
// import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { RootStackParamList } from '../../types';

// // Type for the navigation prop
// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

// type Props = {
//   navigation: HomeScreenNavigationProp;
// };

// export default function HomeScreen({ navigation }: Props) {
//   // Map display labels to actual navigator screen names
//   const screens: { label: string; screen: keyof RootStackParamList }[] = [
//     { label: 'Map', screen: 'Map' },
//     { label: 'Virtual Tours', screen: 'Tour' },
//     { label: 'Events', screen: 'Events' },
//     { label: 'AR', screen: 'AR' },
//   ];

//   return (
//     <ImageBackground
//       source={require('../../assets/images/bg-home.jpg')} // your local image
//       style={styles.background}
//       resizeMode="cover"
//       blurRadius={5} // subtle background blur
//     >
//       <View style={styles.overlay}>
//         <Text style={styles.title}>Monastery360</Text>
//         <Text style={styles.subtitle}>Explore Sikkim’s Monasteries</Text>

//         {screens.map((item, i) => (
//           <BlurView key={item.screen} intensity={50} tint="light" style={[styles.buttonContainer, { backgroundColor: 'rgba(128,128,128,0.4)' }]}>
//             <TouchableOpacity
//               style={styles.button}
//               onPress={() => navigation.navigate(item.screen)}
//             >
//               <Text style={styles.buttonText}>{item.label}</Text>
//             </TouchableOpacity>
//           </BlurView>
//         ))}
//       </View>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: { flex: 1, width: '100%', height: '100%' },
//   overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
//   title: {
//     fontSize: 36,
//     fontWeight: 'bold',
//     color: '#fff',
//     marginBottom: 10,
//     textShadowColor: '#000',
//     textShadowOffset: { width: 2, height: 2 },
//     textShadowRadius: 5,
//   },
//   subtitle: {
//     fontSize: 18,
//     marginBottom: 40,
//     color: '#eee',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 3,
//   },
//   button: {
//     paddingVertical: 15,
//     alignItems: 'center',
//   },
//   buttonContainer: {
//     width: '80%',
//     borderRadius: 15,
//     marginVertical: 10,
//     overflow: 'hidden',
//     borderWidth: 1,
//     borderColor: 'rgba(255,255,255,0.5)',
//     shadowColor: '#000',
//     shadowOpacity: 0.3,
//     shadowRadius: 6,
//     shadowOffset: { width: 0, height: 3 },
//   },

//   buttonText: {
//     color: '#fff', // keeps text readable
//     fontSize: 18,
//     fontWeight: '700',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
// });



// HomeScreen.tsx
import { Bell, Search, Settings } from 'lucide-react-native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MapView, { Marker } from 'react-native-maps';

const Monastery360Home = () => {
  const temples = [
    {
      name: 'Rumtek Monastery',
      latitude: 27.338,
      longitude: 88.616,
      image: require('../../assets/images/rumtek.png'),
    },
    {
      name: 'Pemayangtse Monastery',
      latitude: 27.289,
      longitude: 88.304,
      image: require('../../assets/images/pemayangtse.png'),
    },
  ];

  const featuredServices = [
    { name: '360 Tour', icon: '🌍', color: '#E9D5FF' },
    { name: 'Audio Guide', icon: '🔉', color: '#FBCFE8' },
    { name: 'Transport Bookings', icon: '🚎', color: '#FEF08A' },
    { name: 'Archives', icon: '📖', color: '#FCA5A5' },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#F3F4F6' }}>
      {/* Header */}
      <View style={styles.headerContainer}>
        <Settings color="white" size={24} />
        <Text style={styles.headerTitle}>Monastery 360</Text>
        <View style={styles.headerRight}>
          <View style={styles.notificationContainer}>
            <Bell color="white" size={24} />
            <View style={styles.notificationDot} />
          </View>
          <Search color="white" size={24} />
        </View>
      </View>

      {/* Monastery Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Monasteries</Text>
        <View style={styles.templesRow}>
          {temples.map((temple, index) => (
            <View key={index} style={styles.templeCard}>
              <Image source={temple.image} style={styles.templeImageStyle} resizeMode="cover" />
              <View style={styles.templeOverlay} />
              <View style={styles.templeNameContainer}>
                <Text style={styles.templeName}>{temple.name}</Text>
              </View>
            </View>
          ))}
        </View>
        <TouchableOpacity style={{ marginTop: 8, alignItems: 'center' }}>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>

      {/* Map Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitleGray}>Map</Text>
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
            {temples.map((temple, index) => (
              <Marker
                key={index}
                coordinate={{ latitude: temple.latitude, longitude: temple.longitude }}
                title={temple.name}
                description="Famous Monastery"
              />
            ))}
          </MapView>
        </View>
      </View>

      {/* Featured Services Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitleGray}>Features</Text>
        <View style={styles.featuredRow}>
          {featuredServices.map((service, index) => (
            <View key={index} style={styles.featuredCardRow}>
              <View style={[styles.featuredIcon, { backgroundColor: service.color }]}>
                <Text style={{ fontSize: 18 }}>{service.icon}</Text>
              </View>
              <Text style={styles.featuredText}>{service.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Calendar Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitleGray}>Events & Festivals</Text>
        <View style={styles.calendarCard}>
          <Calendar
            current={'2025-09-20'}
            markingType={'dot'}
            markedDates={{
              '2025-09-05': { marked: true, dotColor: '#10B981' },
              '2025-09-10': { marked: true, dotColor: '#10B981' },
              '2025-09-15': { marked: true, dotColor: '#10B981' },
              '2025-09-20': { selected: true, selectedColor: '#10B981' },
            }}
            onDayPress={(day) => console.log('Selected day', day.dateString)}
            theme={{
              backgroundColor: 'white',
              calendarBackground: 'white',
              textSectionTitleColor: '#374151',
              todayTextColor: '#10B981',
              dayTextColor: '#374151',
              monthTextColor: '#374151',
              arrowColor: '#10B981',
              textDayFontWeight: '500',
              textMonthFontWeight: '600',
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Monastery360Home;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#10B981',
  },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '600' },
  headerRight: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  notificationContainer: { position: 'relative' },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: -2,
    right: -2,
  },
  sectionContainer: { marginTop: 16, paddingHorizontal: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 },
  sectionTitleGray: { fontSize: 16, fontWeight: '600', color: '#374151', marginBottom: 8 },

  // Temple Styles
  templesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  templeCard: {
    flex: 1,
    maxWidth: '48%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 12,
    position: 'relative',
  },
  templeImageStyle: { width: '100%', height: 120 },
  templeOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.2)' },
  templeNameContainer: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 4,
    paddingVertical: 2,
    borderRadius: 4,
  },
  templeName: { color: 'white', fontWeight: '600', fontSize: 14 },
  viewAllText: { color: '#10B981', fontSize: 14, fontWeight: '600' },

  // Map Styles
  mapCard: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#E5E7EB',
  },

  // Featured Services Styles
  featuredRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  featuredCardRow: {
    width: '23%',
    height: 80,
    backgroundColor: 'white',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  featuredIcon: { width: 48, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  featuredText: { fontSize: 10, color: '#374151', textAlign: 'center' },

  // Calendar Styles
  calendarCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 24,
  },
});
