import React, { useEffect, useState } from 'react';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';

import { Marker, Callout } from 'react-native-maps';
import { Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import api from '../../services/api';
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
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('');

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

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      },
    });

    setDevs(response.data);
  }

  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  return (
    <>
      <Map
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0],
            }}
          >
            <Image
              style={{
                width: 54,
                height: 54,
                borderRadius: 4,
                borderWidth: 4,
                borderColor: '#fff',
              }}
              source={{
                uri: dev.avatar_url,
              }}
            />

            <Callout
              onPress={() => {
                navigation.navigate('Profile', {
                  github_username: dev.github_username,
                });
              }}
            >
              <DevView>
                <DevName>{dev.name}</DevName>
                <DevBio>{dev.bio}</DevBio>
                <DevTechs>{dev.techs.join(', ')}</DevTechs>
              </DevView>
            </Callout>
          </Marker>
        ))}
      </Map>

      <InputView>
        <SearchInput value={techs} onChangeText={setTechs} />

        <SearchBtn onPress={loadDevs}>
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
