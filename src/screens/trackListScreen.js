import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to TrackDetail"
        onPress={() => navigation.navigate('TrackDrtail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
