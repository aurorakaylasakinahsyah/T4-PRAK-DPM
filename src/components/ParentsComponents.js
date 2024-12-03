import React, { useState } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import ChildComponents from './ChildComponents';

const ParentsComponents = () => {
  const [teamAScore, setTeamAScore] = useState(0);
  const [teamBScore, setTeamBScore] = useState(0);

  const handleIncrease = (team) => {
    if (team === 'A') {
      const newScore = teamAScore + 1;
      setTeamAScore(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!', 'Tim A Menang 🎉');
      }
    } else {
      const newScore = teamBScore + 1;
      setTeamBScore(newScore);
      if (newScore === 10) {
        Alert.alert('Selamat!', 'Tim B Menang 🎉');
      }
    }
  };

  const handleDecrease = (team) => {
    if (team === 'A') {
      setTeamAScore(Math.max(teamAScore - 1, 0));
    } else {
      setTeamBScore(Math.max(teamBScore - 1, 0));
    }
  };

  const handleReset = () => {
    setTeamAScore(0);
    setTeamBScore(0);
  };

  return (
    <View style={styles.container}>
      <ChildComponents
        teamName="Tim A"
        score={teamAScore}
        onIncrease={() => handleIncrease('A')}
        onDecrease={() => handleDecrease('A')}
      />
      <ChildComponents
        teamName="Tim B"
        score={teamBScore}
        onIncrease={() => handleIncrease('B')}
        onDecrease={() => handleDecrease('B')}
      />
      <View style={styles.resetButton}>
        <Button title="Reset Pertandingan" onPress={handleReset} color="#1E90FF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#FFFFFF', // Warna putih untuk tombol reset
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ParentsComponents;
