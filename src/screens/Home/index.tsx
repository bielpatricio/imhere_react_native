import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { styles } from './styles'
import { Participant } from '../../components/Participant'
import { useState } from 'react'

interface ParticipantsType {
  name: string
  id: number
}

export function Home() {
  // const [participants, setParticipants] = useState<ParticipantsType[]>([])
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState('')

  function handleAddParticipant() {
    if (participants.includes(participantName)) {
      return Alert.alert(
        'Participante Existe',
        `${participantName} ja esta na lista`,
      )
    }
    setParticipants((state) => {
      // return [...state, { name: participantName, id: participants.length }]
      return [...state, participantName]
    })
    setParticipantName('')
  }

  function handleRemoveParticipant(name: string) {
    Alert.alert('Remover', `Remover o participante ${name} da lista?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipants((state) => {
            return state.filter((participant) => participant !== name)
          })
          Alert.alert('Deletado!')
        },
      },
      {
        text: 'Nao',
        style: 'cancel',
      },
    ])
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Festa de aniversário!</Text>
      <Text style={styles.subtitle}>Adicione pessoas a lista de presença.</Text>
      <View style={styles.formField}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#c4c4c4"
          value={participantName}
          onChangeText={setParticipantName}
        />

        <TouchableOpacity onPress={handleAddParticipant} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            handleRemoveParticipant={handleRemoveParticipant}
            key={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmpityText}>
            Ainda nao possui participantes na lista
          </Text>
        )}
      />
      {/* <ScrollView>
        {participants.map((participant, idx) => {
          return (
            <Participant
              name={participant}
              handleRemoveParticipant={handleRemoveParticipant}
              key={idx}
            />
          )
        })}
      </ScrollView> */}
    </View>
  )
}
