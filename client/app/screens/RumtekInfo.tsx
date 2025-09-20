// // RumtekDetail.tsx
// import React from 'react';
// import { FlatList, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import { Calendar } from 'react-native-calendars';
// import MapView, { Marker } from 'react-native-maps';

// const RumtekDetail = () => {
//   const temple = {
//     name: 'Rumtek Monastery',
//     image: require('../../assets/images/rumtek.png'),
//     description:
//       'Rumtek Monastery, also called the Dharmachakra Centre, is the largest monastery in Sikkim. It is the seat of the Karmapa Lama and a major center for Tibetan Buddhism.',
//     history:
//       'Built in 1960 by the 16th Karmapa, Rumtek serves as the center for the Karma Kagyu lineage. It was constructed to resemble the original monastery in Tibet and is a hub for religious study, meditation, and cultural preservation.',
//     architecture:
//       'The monastery showcases Tibetan-style architecture with colorful murals, prayer wheels, stupas, and a large assembly hall. Its intricate designs reflect Buddhist teachings.',
//     spiritualImportance:
//       'Rumtek Monastery hosts important ceremonies and daily prayers. Monks from across the world study, meditate, and perform rituals here.',
//     location: 'Gangtok, Sikkim, India',
//     latitude: 27.338,
//     longitude: 88.616,
//     founded: '1960',
//     festivals: ['Losar', 'Chaam Dance', 'Buddha Jayanti'],
//     gallery: [
//       require('../../assets/images/rumtek.png'),
//       require('../../assets/images/rumtek.png'), // Add more images if available
//     ],
//     visitingHours: '6:00 AM - 6:00 PM',
//     contact: '+91 12345 67890',
//   };

//   const handleShare = async () => {
//     try {
//       await Share.share({
//         message: `Check out ${temple.name} in Sikkim!`,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       {/* Monastery Name at Top */}
//       <View style={styles.nameContainer}>
//         <Text style={styles.name}>{temple.name}</Text>
//       </View>

//       {/* Hero Image */}
//       <Image source={temple.image} style={styles.heroImage} resizeMode="cover" />

//       {/* Temple Basic Info */}
//       <View style={styles.infoContainer}>
//         <View style={styles.labelContainer}>
//           <Text style={styles.labelTitle}>Location:</Text>
//           <Text style={styles.labelText}>{temple.location}</Text>
//         </View>
//         <View style={styles.labelContainer}>
//           <Text style={styles.labelTitle}>Founded:</Text>
//           <Text style={styles.labelText}>{temple.founded}</Text>
//         </View>
//         <View style={styles.labelContainer}>
//           <Text style={styles.labelTitle}>Visiting Hours:</Text>
//           <Text style={styles.labelText}>{temple.visitingHours}</Text>
//         </View>
//         <View style={styles.labelContainer}>
//           <Text style={styles.labelTitle}>Contact:</Text>
//           <Text style={styles.labelText}>{temple.contact}</Text>
//         </View>
//         <View style={styles.labelContainer}>
//           <Text style={styles.labelTitle}>Festivals:</Text>
//           <Text style={styles.labelText}>{temple.festivals.join(', ')}</Text>
//         </View>
//       </View>

//       {/* Description Sections */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Description</Text>
//         <Text style={styles.description}>{temple.description}</Text>

//         <Text style={styles.sectionTitle}>History</Text>
//         <Text style={styles.description}>{temple.history}</Text>

//         <Text style={styles.sectionTitle}>Architecture</Text>
//         <Text style={styles.description}>{temple.architecture}</Text>

//         <Text style={styles.sectionTitle}>Spiritual Importance</Text>
//         <Text style={styles.description}>{temple.spiritualImportance}</Text>
//       </View>

//       {/* 360° Tour, Audio Guide & Digital Archives */}
//       <View style={styles.featureSection}>
//         <View style={styles.featureCard}>
//           <Text style={styles.featureIcon}>🌍</Text>
//           <Text style={styles.featureText}>360° Tour</Text>
//         </View>
//         <View style={styles.featureCard}>
//           <Text style={styles.featureIcon}>🔉</Text>
//           <Text style={styles.featureText}>Audio Guide</Text>
//         </View>
//         <View style={styles.featureCard}>
//           <Text style={styles.featureIcon}>📚</Text>
//           <Text style={styles.featureText}>Digital Archives</Text>
//         </View>
//       </View>

//       {/* Map Section */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Location Map</Text>
//         <View style={styles.mapCard}>
//           <MapView
//             style={{ flex: 1, borderRadius: 12 }}
//             initialRegion={{
//               latitude: temple.latitude,
//               longitude: temple.longitude,
//               latitudeDelta: 0.01,
//               longitudeDelta: 0.01,
//             }}
//             showsUserLocation={true}
//           >
//             <Marker
//               coordinate={{ latitude: temple.latitude, longitude: temple.longitude }}
//               title={temple.name}
//               description="Famous Monastery"
//             />
//           </MapView>
//         </View>
//       </View>

//       {/* Photo Gallery */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Gallery</Text>
//         <FlatList
//           horizontal
//           data={temple.gallery}
//           keyExtractor={(_, index) => index.toString()}
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) => (
//             <Image source={item} style={styles.galleryImage} resizeMode="cover" />
//           )}
//         />
//       </View>

//       {/* Events & Festivals Calendar */}
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Events & Festivals</Text>
//         <View style={styles.calendarCard}>
//           <Calendar
//             current={'2025-09-20'}
//             markingType={'dot'}
//             markedDates={{
//               '2025-09-05': { marked: true, dotColor: '#10B981' },
//               '2025-09-10': { marked: true, dotColor: '#10B981' },
//               '2025-09-15': { marked: true, dotColor: '#10B981' },
//               '2025-09-20': { selected: true, selectedColor: '#10B981' },
//             }}
//             onDayPress={(day) => console.log('Selected day', day.dateString)}
//             theme={{
//               backgroundColor: 'white',
//               calendarBackground: 'white',
//               textSectionTitleColor: '#374151',
//               todayTextColor: '#10B981',
//               dayTextColor: '#374151',
//               monthTextColor: '#374151',
//               arrowColor: '#10B981',
//               textDayFontWeight: '500',
//               textMonthFontWeight: '600',
//             }}
//           />
//         </View>
//       </View>

//       {/* Share & Bookmark */}
//       <View style={styles.featureSection}>
//         <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
//           <Text style={styles.shareText}>Share</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.bookmarkBtn}>
//           <Text style={styles.shareText}>Bookmark</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={{ height: 32 }} /> {/* Bottom padding */}
//     </ScrollView>
//   );
// };

// export default RumtekDetail;

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#F3F4F6' },

//   nameContainer: { padding: 16 },
//   name: { fontSize: 24, fontWeight: '700', color: '#065F46' },

//   heroImage: { width: '100%', height: 220 },

//   infoContainer: { padding: 16 },
//   labelContainer: { flexDirection: 'row', marginBottom: 6, flexWrap: 'wrap' },
//   labelTitle: { fontSize: 14, fontWeight: '600', color: '#065F46', marginRight: 4 },
//   labelText: { fontSize: 14, color: '#374151', flexShrink: 1 },

//   sectionContainer: { paddingHorizontal: 16, marginBottom: 16 },
//   sectionTitle: { fontSize: 18, fontWeight: '700', color: '#065F46', marginBottom: 8 },
//   description: { fontSize: 14, color: '#4B5563', lineHeight: 20, marginBottom: 12 },

//   featureSection: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
//   featureCard: {
//     backgroundColor: 'white',
//     width: '30%',
//     borderRadius: 12,
//     paddingVertical: 16,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   featureIcon: { fontSize: 28, marginBottom: 8 },
//   featureText: { fontSize: 14, fontWeight: '600', color: '#065F46', textAlign: 'center' },

//   mapCard: { height: 200, borderRadius: 12, overflow: 'hidden', marginBottom: 16 },

//   galleryImage: {
//     width: 140,
//     height: 100,
//     borderRadius: 12,
//     marginRight: 12,
//   },

//   calendarCard: {
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOpacity: 0.05,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//     marginBottom: 24,
//   },

//   shareBtn: {
//     backgroundColor: '#10B981',
//     flex: 1,
//     marginHorizontal: 8,
//     borderRadius: 12,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   bookmarkBtn: {
//     backgroundColor: '#065F46',
//     flex: 1,
//     marginHorizontal: 8,
//     borderRadius: 12,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   shareText: { color: 'white', fontWeight: '600', fontSize: 14 },
// });


// RumtekDetail.tsx
import React from 'react';
import { FlatList, Image, ScrollView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Calendar } from 'react-native-calendars';
import MapView, { Marker } from 'react-native-maps';

const RumtekDetail = () => {
  const temple = {
    name: 'Rumtek Monastery',
    image: require('../../assets/images/rumtek.png'),
    description:
      'Rumtek Monastery, also called the Dharmachakra Centre, is the largest monastery in Sikkim. It is the seat of the Karmapa Lama and a major center for Tibetan Buddhism.',
    history:
      'Built in 1960 by the 16th Karmapa, Rumtek serves as the center for the Karma Kagyu lineage. It was constructed to resemble the original monastery in Tibet and is a hub for religious study, meditation, and cultural preservation.',
    architecture:
      'The monastery showcases Tibetan-style architecture with colorful murals, prayer wheels, stupas, and a large assembly hall. Its intricate designs reflect Buddhist teachings.',
    spiritualImportance:
      'Rumtek Monastery hosts important ceremonies and daily prayers. Monks from across the world study, meditate, and perform rituals here.',
    location: 'Gangtok, Sikkim, India',
    latitude: 27.338,
    longitude: 88.616,
    founded: '1960',
    festivals: ['Losar', 'Chaam Dance', 'Buddha Jayanti'],
    gallery: [
      require('../../assets/images/rumtek.png'),
      require('../../assets/images/rumtek.png'),
    ],
    visitingHours: '6:00 AM - 6:00 PM',
    contact: '+91 12345 67890',
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Check out ${temple.name} in Sikkim!`,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name */}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{temple.name}</Text>
      </View>

      {/* Hero Image */}
      <Image source={temple.image} style={styles.heroImage} resizeMode="cover" />

      {/* Basic Info */}
      <View style={styles.infoContainer}>
        {[
          { title: 'Location', value: temple.location },
          { title: 'Founded', value: temple.founded },
          { title: 'Visiting Hours', value: temple.visitingHours },
          { title: 'Contact', value: temple.contact },
          { title: 'Festivals', value: temple.festivals.join(', ') },
        ].map((item) => (
          <View style={styles.labelContainer} key={item.title}>
            <Text style={styles.labelTitle}>{item.title}:</Text>
            <Text style={styles.labelText}>{item.value}</Text>
          </View>
        ))}
      </View>

      {/* Description Sections */}
      <View style={styles.sectionContainer}>
        {[
          { title: 'Description', value: temple.description },
          { title: 'History', value: temple.history },
          { title: 'Architecture', value: temple.architecture },
          { title: 'Spiritual Importance', value: temple.spiritualImportance },
        ].map((section) => (
          <View key={section.title} style={{ marginBottom: 12 }}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Text style={styles.description}>{section.value}</Text>
          </View>
        ))}
      </View>

      {/* Features: 360° Tour, Audio Guide, Digital Archives */}
      <View style={styles.featureSection}>
        {[
          { icon: '🌍', label: '360° Tour' },
          { icon: '🔉', label: 'Audio Guide' },
          { icon: '📚', label: 'Digital Archives' },
        ].map((feature) => (
          <View style={styles.featureCard} key={feature.label}>
            <Text style={styles.featureIcon}>{feature.icon}</Text>
            <Text style={styles.featureText}>{feature.label}</Text>
          </View>
        ))}
      </View>

      {/* Map */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Location Map</Text>
        <View style={styles.mapCard}>
          <MapView
            style={{ flex: 1, borderRadius: 12 }}
            initialRegion={{
              latitude: temple.latitude,
              longitude: temple.longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
            showsUserLocation={true}
          >
            <Marker
              coordinate={{ latitude: temple.latitude, longitude: temple.longitude }}
              title={temple.name}
              description="Famous Monastery"
            />
          </MapView>
        </View>
      </View>

      {/* Gallery */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Gallery</Text>
        <FlatList
          horizontal
          data={temple.gallery}
          keyExtractor={(_, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Image source={item} style={styles.galleryImage} resizeMode="cover" />
          )}
        />
      </View>

      {/* Events & Festivals */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Events & Festivals</Text>
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

      {/* Share & Bookmark */}
      <View style={styles.featureSection}>
        <TouchableOpacity style={styles.shareBtn} onPress={handleShare}>
          <Text style={styles.shareText}>Share</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkBtn}>
          <Text style={styles.shareText}>Bookmark</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: 32 }} />
    </ScrollView>
  );
};

export default RumtekDetail;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },

  nameContainer: { padding: 16 },
  name: { fontSize: 24, fontWeight: '700', color: '#065F46' },

  heroImage: { width: '100%', height: 220 },

  infoContainer: { padding: 16 },
  labelContainer: { flexDirection: 'row', marginBottom: 6, flexWrap: 'wrap' },
  labelTitle: { fontSize: 14, fontWeight: '600', color: '#065F46', marginRight: 4 },
  labelText: { fontSize: 14, color: '#374151', flexShrink: 1 },

  sectionContainer: { paddingHorizontal: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: '#065F46', marginBottom: 8 },
  description: { fontSize: 14, color: '#4B5563', lineHeight: 20 },

  featureSection: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 16 },
  featureCard: {
    backgroundColor: 'white',
    width: '30%',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  featureIcon: { fontSize: 28, marginBottom: 8 },
  featureText: { fontSize: 14, fontWeight: '600', color: '#065F46', textAlign: 'center' },

  mapCard: { height: 200, borderRadius: 12, overflow: 'hidden', marginBottom: 16 },

  galleryImage: { width: 140, height: 100, borderRadius: 12, marginRight: 12 },

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

  shareBtn: {
    backgroundColor: '#10B981',
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  bookmarkBtn: {
    backgroundColor: '#065F46',
    flex: 1,
    marginHorizontal: 8,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  shareText: { color: 'white', fontWeight: '600', fontSize: 14 },
});
