import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 250,
    marginVertical: 10,
    width,
  },
  container: {
    marginBottom: 10,
  },
  image: {
    flex: 1,
    height: 200,
    width,
  },
  pagerButton: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  pagerPanel: {
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    right: 10,
    width: '25%',
  },
  title: {
    alignSelf: 'flex-start',
    backgroundColor: 'white',
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 4,
  },
  titlePanel: {
    position: 'absolute',
    right: 10,
    top: '30%',
    width: '25%',
  },
});

export default styles;
