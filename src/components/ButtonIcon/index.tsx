import React from "react"
import {View, Text, Image, TouchableOpacity, TouchableOpacityProps} from 'react-native'

import DiscordImg from '../../assets/discord.png'

import {styles} from './styles'

type ButtonProps = TouchableOpacityProps & {
  title?: string
}

export function ButtonIcon ({title, ...TouchableOpacityProps}: ButtonProps){
  return(
    <TouchableOpacity style={styles.container} {...TouchableOpacityProps}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordImg} style={styles.icon}/>
      </View>
      <Text style={styles.title}>{title || 'NO NAME'}</Text>
    </TouchableOpacity>
  )
}