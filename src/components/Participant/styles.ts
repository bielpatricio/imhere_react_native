import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../styles/themes/default'

export const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    paddingLeft: 12,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: defaultTheme['gray-500'],
    borderRadius: 12,
    // borderBottomLeftRadius: 12,
    // borderTopLeftRadius: 12,
    borderColor: defaultTheme['gray-100'],
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme['red-500'],
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    width: 60,
    height: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultTheme['gray-100'],
  },
  names: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultTheme['gray-100'],
    // width: '100%',
    alignItems: 'center',
  },
})
