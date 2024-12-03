import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import ParentsComponents from '../components/ParentsComponents';

// Mendapatkan ukuran layar perangkat
const { width, height } = Dimensions.get('window');

const ExampleComponents = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚽ Hitung Skor Futsal</Text>
      <ParentsComponents />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05, // Mengatur padding berdasarkan lebar layar (5% dari lebar layar)
    backgroundColor: '#87CEEB', // Latar belakang biru langit
  },
  title: {
    fontSize: width * 0.09, // Mengatur ukuran font berdasarkan lebar layar (9% dari lebar layar)
    fontWeight: '800', // Menggunakan ketebalan font yang lebih besar
    color: '#FFFFFF',
    marginBottom: height * 0., // Menambahkan jarak lebih banyak di bawah judul untuk memindahkan judul ke bawah
    textAlign: 'center',
    textShadowColor: '#000000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    transform: [{ rotate: '-5deg' }], // Efek rotasi pada judul untuk kesan lebih dinamis
  },
});

export default ExampleComponents;
