import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  const events = [
    { id: '1', monastery: 'Rumtek', event: 'Losar Festival', date: '2025-02-10' },
    { id: '2', monastery: 'Tashiding', event: 'Cham Dance', date: '2025-03-15' },
  ];

  return (
    <ImageBackground
      source={require('../../assets/images/bg-home.jpg')} 
      style={styles.background}
      blurRadius={10} // adjust blur intensity
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Upcoming Events</Text>
        <FlatList
          data={events}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.event}>{item.event}</Text>
              <Text style={styles.monastery}>{item.monastery}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
          )}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: { flex: 1, padding: 20, backgroundColor: 'rgba(0,0,0,0.2)' }, // optional semi-transparent overlay
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#fff' },
  card: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  event: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  monastery: { fontSize: 16, color: '#666' },
  date: { fontSize: 14, color: '#999' },
});
