import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ChildComponents = ({ teamName, score, onIncrease, onDecrease }) => {
  return (
    <View style={styles.teamContainer}>
      <Text style={styles.teamName}>{teamName}</Text>
      <Text style={styles.score}>Skor: {score}</Text>
      
      <View style={styles.buttonRow}>
        <TouchableOpacity 
          style={[styles.button, styles.increaseButton]} 
          onPress={onIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.button, styles.decreaseButton]} 
          onPress={onDecrease} 
          disabled={score <= 0}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamContainer: {
    marginVertical: 20,
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Latar belakang tim dengan warna biru langit
    padding: 25,
    borderRadius: 15,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 8,
    borderWidth: 2,
    borderColor: '#87CEEB',
    position: 'relative',
  },
  teamName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E90FF',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    marginBottom: 10,
  },
  score: {
    fontSize: 40,
    marginVertical: 15,
    color: '#4682B4',
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    shadowColor: '#1E90FF',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
    transform: [{ scale: 1 }],
    transition: 'transform 0.2s',
  },
  increaseButton: {
    backgroundColor: '#00BFFF',  // Warna tombol tambah
    borderColor: '#1E90FF',
  },
  decreaseButton: {
    backgroundColor: '#4682B4', // Warna tombol kurang
    borderColor: '#1E90FF',
    opacity: 1,
  },
  buttonText: {
    fontSize: 36,
    color: '#FFFFFF',  // Warna putih untuk teks
    fontWeight: 'bold',
  },
});

export default ChildComponents;
