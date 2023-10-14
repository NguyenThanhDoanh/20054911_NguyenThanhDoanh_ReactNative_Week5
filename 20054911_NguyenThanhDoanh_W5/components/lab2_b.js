import React from 'react';
import { StyleSheet,
     Text, 
     View, 
     Image, 
     Button, 
     TextInput,} from 'react-native';

export default function Lab2_b() {
    return (
        <View style={styles.container} >
            <View style={styles.top}>
                <View style={styles.top1}>
                    <Image style={{ flex: 1, width: 62, height: 62, alignItems:'center' }} source={{ uri:'https://www.freepnglogos.com/uploads/usb-png/png-usb-stick-transparent-usb-stick-images-pluspng-22.png'}}></Image>

                    <Text style={{ flex: 3, fontWeight:'bold', fontSize:16}}>USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth </Text>
                </View>
                <View style={styles.top2}>
                    <Text style={{ flex: 0.5, fontWeight: 'bold', fontSize: 20, textAlign:'center'}}>Cực kỳ hài lòng</Text>
                    <Image style={{ flex: 1, marginHorizontal: 50}} source={{ uri:'https://www.pngmart.com/files/23/Stars-PNG.png'}}></Image>
                </View>
                    
            
            </View>
            <View style={styles.center}>
                <View style={styles.center1}>
                    <Image style={{ height:40, width:50,  }} source={{ uri: 'https://www.pngmart.com/files/1/Photo-Camera-PNG-Transparent-Image.png' }}></Image>
                    <Text style={{ width: 280,fontWeight: 'bold', fontSize: 18}}>Thêm hình ảnh</Text>
                </View>
                <View style={{ flex: 0.5 }}></View>
                <View style={styles.center2}>
                    <View style={styles.center21}>
                        <TextInput style={{width: 330, height: 230, borderWidth:1, borderRadius:5, fontSize:18, color: '#d0d0d0', padding: 10}} placeholder='Hãy chi sẻ những điều mà bạn thích về sản phẩm' multiline>
                        </TextInput>
                        <Text style={{fontWeight:'bold', justifyContent:'flex-end', justifyContent: 'flex-end'}}>https://meet.google.com/nsj-ojwi-xpp</Text>
                    </View>
                    
                </View>
            </View>
            <View style={{ flex: 2 }}></View>
            <View style={styles.bottom}>
              
                <Button style={styles.bottomButtom}  title='Gửi' color="#3d39d1"></Button>
               
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      
    },
    top:{
        flex:2,
        marginTop: 20,
    }
    ,
    top1:{
        flex:1,
        flexDirection: 'row',
       
    }
    ,
    top2:{
        flex:1,
        marginTop: 0
    },
    center:{
        flex:3,
        alignItems: 'center',
       
        
       
       
    },
    center1:{
        flex:1.2,
        flexDirection: 'row',  
        borderColor: '#b6b4f8',
        borderWidth:2,
        borderRadius: 5,
        marginTop: 20,
        alignItems: 'center',
        
        
        
       
    },
    center2:{
        flex:2,
        alignItems: 'center',
        
        
        
       
    },
    
    center21:{
       
        alignItems: 'center',
      
        
        
       
    },
    bottom:{
        flex:1,
        marginHorizontal: 30
        
    }
   
});