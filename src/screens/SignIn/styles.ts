import {StyleSheet} from 'react-native'

import {theme} from '../../global/styles/theme'

export const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: theme.colors.background,
    justifyContent: 'center',
    alignItems: 'center'
  },
  content:{
    marginTop: -40,
    paddingHorizontal: 50
  },
  title:{
    color: theme.colors.heading,
    fontSize: 40,
    marginBottom: 16,
    textAlign: 'center'
  },
  subtitle:{
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 64
  },
  image:{
    width: '100%'
  }
})