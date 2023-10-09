import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { CheckBox } from 'react-native-web';


export default function Lab2_c() {
    let [length,setLength] = useState()
    let [check1, setCheck1] = useState(false)
    let [check2, setCheck2] = useState(false)
    let [check3, setCheck3] = useState(false)
    let [check4, setCheck4] = useState(false)


    function randomPass(c1, c2, c3, c4) {
        const characters = [];
        if (c1) characters.push('abcdefghijklmnopqrstuvwxyz');
        if (c2) characters.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
        if (c3) characters.push('0123456789');
        if (c4) characters.push('!@#$%^&*()_+[]{}|;:,.<>?');
        if (characters.length === 0) {
          return 'Please select at least one character type.';
        }
    
        const passwordLength = length || 8; // Default to a length of 8 if len is not set.
        let password = '';
    
        for (let i = 0; i < passwordLength; i++) {
          const randomCharacterSet = characters[Math.floor(Math.random() * characters.length)];
          const randomCharacter = randomCharacterSet[Math.floor(Math.random() * randomCharacterSet.length)];
          password += randomCharacter;
        }
    
        return password;
      }

    return(
        <View style={styles.container} >
            <View style={styles.top}>
                <View style={styles.top1}>
                    <Text style={{fontSize:25, fontWeight:'bold', color:'white'}}>PASSWORD</Text>
                    <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>GENERATOR</Text>
                </View>
                
                
                <View style={styles.top2}>
                    <TextInput id='pass' style={{ flex: 0.7, fontSize:25, backgroundColor:'#151537', padding:12, color:'#9595a1'}} ></TextInput>
                </View>
                
                
                
            </View>
            <View style={styles.center}>
                <View style={styles.center1}>
                    <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>Password length</Text>
                    <TextInput id='lengthP' style={{ flex: 2.5, backgroundColor: '#ffffff', width: 20, fontSize: 20, marginRight: 10, marginBottom: 20 }}
                    onChange={() => { setLength(document.getElementById('lengthP').value); randomPass(check1, check2, check3, check4)}}
                    value={length}></TextInput>
                </View>
                <View style={styles.center2}>
                    <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>Include lower case letters</Text>
                    <CheckBox style={{ flex: 0.2 , paddingRight: 10, marginTop:8}} checked={check1} onPress={()=> {setCheck1(!check1); randomPass(!check1, check2, check3, check4);}}>
                    </CheckBox>
                </View>
                <View style={styles.center3}>
                    <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold',  color: 'white', alignItems: 'center' }}>include upcase letters</Text>
                    <CheckBox style={{ flex: 0.2, paddingRight: 10, marginTop:8}} checked={check2} onPress={()=> {setCheck2(!check2); randomPass(check1, !check2, check3, check4);}}>
                        
                    </CheckBox>
                </View>
                <View style={styles.center4}>
                    <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>include number</Text>
                    <CheckBox style={{ flex: 0.2 , paddingRight: 10, marginTop:8}} checked={check3} onPress={()=> {setCheck3(!check3); randomPass(check1, check2, !check3, check4);}}>
                        
                    </CheckBox>
                </View>
                <View style={styles.center5}>
                    <Text style={{ flex: 3, fontSize: 20, fontWeight: 'bold', color: 'white', alignItems: 'center' }}>include special symbol</Text>
                    <CheckBox style={{ flex: 0.2, paddingRight: 10, marginTop:8}} checked={check4} onPress={()=> {setCheck4(!check4); randomPass(check1, check2, check3, !check4);}}>
                        
                    </CheckBox>
                </View>
                

            </View>
            <View style={styles.bottom}>
                <Button style={styles.bottomButtom}  title='GENERATE PASSWORD' color="#3b3b98"></Button>
            </View>
        </View>


    )

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#23235b',
        borderWidth: 20,
        borderColor: '#9999c3',
       
        

       
    },
    top:{
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,

    },
    top1:{
        flex: 2,
        alignItems: 'center',
        paddingTop: 20,

    },
    top2:{
        flex: 2,
        alignItems: 'center',
        paddingTop: 20,
        
        

    },
    center:{
        flex: 2,
        paddingLeft: 10,
        
    },
    center1:{
        flex: 1,
        flexDirection: 'row',
    },
    center2:{
        flex: 1,
        flexDirection: 'row',
    },
    center3:{
        flex: 1,
        flexDirection: 'row',
    },
    center4:{
        flex: 1,
        flexDirection: 'row',
    },
    center5:{
        flex: 1,
        flexDirection: 'row',
    },
    bottom:{
        flex: 0.5,
        paddingHorizontal: 25
    },
    bottomButtom:{
        flex: 1,
        
    },
        
       
  
        
})