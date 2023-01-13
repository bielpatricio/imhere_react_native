import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

type ParticipantProps = {
  name: string
  handleRemoveParticipant: (name: string) => void
}

export function Participant({
  name,
  handleRemoveParticipant,
}: ParticipantProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.names}>{name}</Text>

      <TouchableOpacity
        onPress={() => handleRemoveParticipant(name)}
        style={styles.button}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
