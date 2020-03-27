import React from 'react';

import { View, FlatList, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

import styles from './styles';

import logoImg from '../../assets/logo.png';

export default function Detail() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Detail');
  }

  return(
    <View style={styles.constainer}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>0 casos. </Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

      <FlatList 
        data={ [1,2,3] }
        style={styles.incidentList}
        keyIncident = {incident => String(incident)}
        renderItem={() => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>APAD:</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>Cadelinha atropelada:</Text>

            <Text style={styles.incidentProperty}>Valor:</Text>
            <Text style={styles.incidentValue}>R$ 120.00</Text>
            <TouchableOpacity 
              style={styles.detailsButton}
              onPress={navigateToDetail} >
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>

              <Feather name="arrow-right" size={16} color="#e02041" />

            </TouchableOpacity>

          </View>
        )}
      />   

    </View>
  )
}