import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {style} from './styles'


export function SignIn(){
  const [myInput, setMyInput] = useState('')
  return(
    <View style={style.container}>
      <Text style={style.text}>Hello World! NLW Together</Text>
      <TextInput style={style.input} onChangeText={setMyInput}/>
      <Text style={style.text}>{myInput}</Text>
    </View>
  )
}