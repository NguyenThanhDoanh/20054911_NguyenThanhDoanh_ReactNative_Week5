import { StyleSheet, Text, View, Image, TextInput, ViewBase } from 'react-native';
import React from 'react'
import { Button } from 'react-native-web';




import Lab2_a from './components/lab2_a';
import Lab2_b from './components/lab2_b';
import Lab2_c from './components/lab2_c';
import Lab2_Tiktok_OK from './components/lab2_Tiki_OK';

export default function App()  {
    return (
        <View style={styles.container}>
            
            
            {/* <Lab2_a/>; */}
            {/* <Lab2_b/>; */}
            {/* <Lab2_c/>; */}
            <Lab2_Tiktok_OK/>;
  
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        justifyContent: "center",
  },
        
})
    

    

    

   

    