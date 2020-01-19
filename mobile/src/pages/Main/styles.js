import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Map = styled(MapView)`
  flex: 1;
`;

export const DevView = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const InputView = styled.View`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Buscar devs por techs...',
  placeholderTextColor: '#999',
  autoCapitalize: 'words',
  autoCorrect: false,
})`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  elevation: 2;
`;

export const SearchBtn = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8d4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;
