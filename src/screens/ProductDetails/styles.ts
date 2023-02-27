import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
  },
  description: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
  },
  price: {
    color: 'black',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
  photo: {
    height: 200,
    width: '45%',
  },
  rightPanel: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
    width: '50%',
  },
  separator10: {
    height: 1,
    marginVertical: 10,
    width: '80%',
  },
  separator20: {
    height: 1,
    marginVertical: 20,
    width: '80%',
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
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
