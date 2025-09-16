import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types';

// Type for the navigation prop
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monastery360</Text>
      <Text style={styles.subtitle}>Explore Sikkim’s Monasteries</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Map')}>
        <Text style={styles.buttonText}>Map</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tour')}>
        <Text style={styles.buttonText}>Virtual Tours</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Events')}>
        <Text style={styles.buttonText}>Events</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 36, fontWeight: 'bold', color: '#4b4b9b', marginBottom: 10 },
  subtitle: { fontSize: 18, marginBottom: 40, color: '#333' },
  button: { backgroundColor: '#4b4b9b', paddingVertical: 15, paddingHorizontal: 60, borderRadius: 10, marginVertical: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});
