import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function EventsScreen() {
  const events = [
    { id: '1', monastery: 'Rumtek', event: 'Losar Festival', date: '2025-02-10' },
    { id: '2', monastery: 'Tashiding', event: 'Cham Dance', date: '2025-03-15' },
  ];

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#4b4b9b' },
  card: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 2 },
  event: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  monastery: { fontSize: 16, color: '#666' },
  date: { fontSize: 14, color: '#999' },
});
