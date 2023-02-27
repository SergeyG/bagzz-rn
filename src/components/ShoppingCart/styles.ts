import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  blackBox: {
    borderColor: 'black',
    borderWidth: 1,
  },
  container: {
    height: 175,
    padding: 15,
    width: '100%',
  },
  description: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fullWidth: {
    width: '100%',
  },
  leftPanel: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '30%',
  },
  price: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
  },
  photo: {
    height: 100,
    width: '100%',
  },
  quantityPanel: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
    height: 28,
    width: 28,
  },
  removePaddings: {
    padding: -3,
    margin: -3,
  },
  rightPanel: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 15,
    width: '70%',
  },
  row: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  separator: {
    marginTop: 10,
  },
  styleText: {
    color: '#888',
    fontSize: 14,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default styles;
