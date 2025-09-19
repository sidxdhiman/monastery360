// import { BlurView } from '@react-native-community/blur';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BlurView } from 'expo-blur';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../types';

// Type for the navigation prop
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export default function HomeScreen({ navigation }: Props) {
  // Map display labels to actual navigator screen names
  const screens: { label: string; screen: keyof RootStackParamList }[] = [
    { label: 'Map', screen: 'Map' },
    { label: 'Virtual Tours', screen: 'Tour' },
    { label: 'Events', screen: 'Events' },
    { label: 'AR', screen: 'AR' },
  ];

  return (
    <ImageBackground
      source={require('../../assets/images/bg-home.jpg')} // your local image
      style={styles.background}
      resizeMode="cover"
      blurRadius={5} // subtle background blur
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Monastery360</Text>
        <Text style={styles.subtitle}>Explore Sikkim’s Monasteries</Text>

        {screens.map((item, i) => (
          <BlurView key={item.screen} intensity={50} tint="light" style={[styles.buttonContainer, { backgroundColor: 'rgba(128,128,128,0.4)' }]}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
          </BlurView>
        ))}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, width: '100%', height: '100%' },
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
    color: '#eee',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  button: {
    paddingVertical: 15,
    alignItems: 'center',
  },
  buttonContainer: {
    width: '80%',
    borderRadius: 15,
    marginVertical: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  buttonText: {
    color: '#fff', // keeps text readable
    fontSize: 18,
    fontWeight: '700',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});
