import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

import { Participant } from '../../components/Participant';

import { styles } from './styles';

export default function Home() {
  const participants = ['Ana', 'Maria', 'João', 'José', 'Paula', 'André', 'Luiz', 'Leandro', 'Julia', 'Caroline', 'Diego']


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