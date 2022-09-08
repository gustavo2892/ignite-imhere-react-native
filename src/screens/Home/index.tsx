import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const [participants, setParticipantes] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd() {
    if (!participantName) {
      return Alert.alert('Preencha o nome');
    }

    if (participants.includes(participantName)) {
      return Alert.alert('Participante Existe', 'Já existe um participante na lista com esse nome.');
    }

    setParticipantes(prevState => [...prevState, participantName]);
    setParticipantName('');
  };

  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => {
          setParticipantes(prevState => prevState.filter((participant) => participant !== name));
          Alert.alert('Deletado');
        }
      },
      {
        text: 'Não'
      }
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6B6B6B"}
          onChangeText={(text) => setParticipantName(text)}
          value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={participants}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Participant key={item} name={item} onRemove={handleParticipantRemove}/>
          )}
          ListEmptyComponent={() => (
            <Text style={styles.listEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença
            </Text>
          )}
        />
    </View>
  );
};