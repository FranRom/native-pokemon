import { StyleSheet } from 'react-native';

export const pokemonSearchStyles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  textInput: {
    marginTop: 16,
    marginBottom: 8,
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    paddingLeft: 10,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF'
  }
});

export const pokemonListStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export const pokemonItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 4,
    padding: 30,
    borderColor: '#2a4944',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#eeeeee',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    textAlign: 'center'
  },
  image: {
    height: 150,
    width: 150
  }
});

export const additionalInfoStyles = StyleSheet.create({
  container: {
    marginTop: 8,
    padding: 16,
    borderRadius: 8,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
