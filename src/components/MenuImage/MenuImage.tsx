import React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './styles';

type MenuImageParams = {
  onPress: () => void;
};

export default function MenuImage(props: MenuImageParams) {
  return (
    <TouchableOpacity
      style={styles.headerButtonContainer}
      onPress={props.onPress}>
      <Image
        style={styles.headerButtonImage}
        source={require('../../../assets/icons/menu.png')}
      />
    </TouchableOpacity>
  );
}
