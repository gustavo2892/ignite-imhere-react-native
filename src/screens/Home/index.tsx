import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {

  function handleParticipantAdd() {
    console.log('Clicou');
  };

  function handleParticipantRemove(name: string) {
    console.log(`Clicou em remover ${name}`);
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
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Participant name="Gustavo Freitas" onRemove={handleParticipantRemove}/>
      <Participant name="Bruno Freitas" onRemove={handleParticipantRemove}/>
    </View>
  );
};