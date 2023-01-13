import { StyleSheet } from 'react-native'
import { defaultTheme } from '../../styles/themes/default'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTheme['gray-900'],
    padding: 32,
  },
  title: {
    color: defaultTheme['teal-500'],
    fontWeight: 'bold',
    fontSize: 32,
    marginTop: 36,
  },
  subtitle: {
    color: defaultTheme['gray-400'],
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
    // marginLeft: 10,
  },
  input: {
    padding: 16,
    color: defaultTheme['gray-100'],
    backgroundColor: defaultTheme['teal-700'],
    borderRadius: 12,
    // borderBottomLeftRadius: 12,
    // borderTopLeftRadius: 12,
    height: 60,
    flex: 1,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTheme['teal-300'],
    marginLeft: 10,
    borderRadius: 12,
    // borderTopRightRadius: 12,
    // borderBottomRightRadius: 12,
    width: 60,
    height: 60,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: defaultTheme['gray-900'],
  },
  formField: {
    marginBottom: 36,
    marginTop: 36,
    width: '100%',
    flexDirection: 'row',
  },
  listEmpityText: {
    color: defaultTheme['teal-500'],
    fontSize: 14,
    textAlign: 'center',
  },
})
