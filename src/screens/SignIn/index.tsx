import React, { useState } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import {style} from './styles'

import {ButtonIcon} from '../../components/ButtonIcon'

import IllustrationImg from '../../assets/illustration.png'

export function SignIn(){
  return(
    <View style={style.container}>
      <StatusBar barStyle='light-content' backgroundColor='transparent' translucent/>
      <Image source={IllustrationImg} style={style.image}/>
      <View style={style.content}>
        <Text style={style.title}>
          Organize{'\n'}suas jogatinas{'\n'}facilmente
        </Text>
        <Text style={style.subtitle}>
          Crie grupos para jogar seus games{'\n'} favoritos com seus amigos
        </Text>
        <ButtonIcon />
      </View>
    </View>
  )
}