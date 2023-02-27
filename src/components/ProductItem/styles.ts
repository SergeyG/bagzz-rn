import {Dimensions, StyleSheet} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const productNumColums = 2;
// item size
const ITEM_HEIGHT = 225;
const ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    height: ITEM_HEIGHT,
    justifyContent: 'flex-start',
    marginLeft: ITEM_MARGIN,
    marginTop: 10,
    paddingTop: 10,
    width:
      (SCREEN_WIDTH - (productNumColums + 1) * ITEM_MARGIN) / productNumColums,
  },
  favoriteIcon: {
    position: 'absolute',
    right: 10,
    top: 5,
  },
  photo: {
    height: '60%',
    width: '60%',
  },
  shopNowButton: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  shopNowPanel: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    paddingHorizontal: 5,
  },
  title: {
    color: 'black',
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default styles;
