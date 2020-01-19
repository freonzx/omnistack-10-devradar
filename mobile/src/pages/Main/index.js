import React, { useEffect, useState } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { Marker, Callout } from 'react-native-maps';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Map,
  DevView,
  DevName,
  DevTechs,
  DevBio,
  InputView,
  SearchInput,
  SearchBtn,
} from './styles';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        });
      }
    }

    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <>
      <Map initialRegion={currentRegion}>
        <Marker coordinate={{ latitude: -23.489354, longitude: -46.750816 }}>
          <Image
            style={{
              width: 54,
              height: 54,
              borderRadius: 4,
              borderWidth: 4,
              borderColor: '#fff',
            }}
            source={{
              uri:
                'https://avatars0.githubusercontent.com/u/26206406?s=460&v=4',
            }}
          />

          <Callout
            onPress={() => {
              navigation.navigate('Profile', { github_username: 'freonzx' });
            }}
          >
            <DevView>
              <DevName>Yago Theodoro</DevName>
              <DevBio>Fullstack Developer</DevBio>
              <DevTechs>ReactJs, NodeJs</DevTechs>
            </DevView>
          </Callout>
        </Marker>
      </Map>

      <InputView>
        <SearchInput />

        <SearchBtn>
          <MaterialIcons
            onPress={() => {}}
            name='my-location'
            size={20}
            color='#fff'
          />
        </SearchBtn>
      </InputView>
    </>
  );
}
