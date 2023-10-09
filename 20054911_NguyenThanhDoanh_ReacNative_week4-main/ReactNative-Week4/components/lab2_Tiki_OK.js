
import React, {useState} from 'react';
import { StyleSheet,
     Text, 
     View, 
     Image, 
     Button, 
     TextInput,
     TouchableOpacity,} from 'react-native';
import Sach from "../assets/sach.jpg";
import Foder from "../assets/foder.jpg";


export default function Lab2_Tiktok_OK() {
    let [quanlity,setQuanlity] = useState(1);
    let [priceTemp, setPriceTemp] = useState('141.800'+' đ')

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <View style={styles.top1}>
                    <View style={styles.top11}>
                        <Image source={Sach}
                        style={{width: '120px', height: '160px'}}/>
                    </View>
                    <View style={styles.top12}>
                        <Text style={{fontSize:14, fontWeight:'bold'}}>Nguyên hàm tích phân và ứng dụng</Text>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Cung cấp bởi Tiki Trading</Text>
                        <Text style={{ fontSize: 19, fontWeight: 'bold', color: 'red' }} value={priceTemp}>141.800 đ</Text>
                        <Text style={{ fontSize: 12, fontWeight: 'bold', textDecorationStyle: 'solid' , color: '#8c8c8c'}}><del>141.000 đ</del></Text>
                        <View style={styles.top121}>
                            <TouchableOpacity 
                            onPress={() => { setQuanlity(quanlity - 1); setPriceTemp(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(140800 * (quanlity - 1))) }} 
                            style={{ backgroundColor:'#c4c4c4', height:20, width:20, justifyContent:'center', alignItems:'center'}}>-</TouchableOpacity>
                            
                            <TextInput id='quanlity' style={{ width:16, fontSize: 15, fontWeight: 'bold' }} value={quanlity}></TextInput>
                            <TouchableOpacity 
                                onPress={() => { setQuanlity(quanlity + 1); setPriceTemp(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(140800*(quanlity+1)))}} 
                                style={{ backgroundColor:'#c4c4c4', height:20, width:20, justifyContent:'center', alignItems:'center'}}>+</TouchableOpacity>
                            <Text style={{color:'blue', fontWeight:'bold',  paddingLeft: 60}}>Mua sau</Text>
                        </View>

                    </View>
                    

                    

                
                </View>
                
                <View style={styles.top2}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Mã giảm giá đã lưu       <br></br></Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' , color:'blue'}}>Xem tại đây</Text>
                </View>
            
                <View style={styles.top3}>
                    <View style={styles.top31}>
                        <Image source={Foder}
                        style={{width: '35px', height: '20px', marginLeft: 20}}/>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mã giảm giá</Text>
                    </View>
                    <View style={styles.top32}>
                        <Button style={styles.topButtom}
                        color={'#0a5eb7'} title='ÁP DỤNG'></Button>
                    </View>
                    
                </View>
            </View>
            <View style={{ flex: 0.1, backgroundColor:  '#c4c4c4'}}></View>
            <View style={styles.center}>
                <View style={styles.center1}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold' }}> Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color:'blue' }}> Nhập tại đây?</Text>
                </View>
                <View style={{ flex: 0.1, backgroundColor:  '#c4c4c4'}}></View>
                <View style={styles.center2}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', paddingLeft: 20 }}>Tạm tính</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingRight: 20 }} value={priceTemp}>141.800 đ</Text>
                
                </View>
            </View>
            <View style={{ flex: 1, backgroundColor:  '#c4c4c4'}}></View>
            <View style={styles.bottom}>
                <View style={styles.bottom1}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color:'#8e8e8e'}}>Thành Tiền</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'red', paddingRight: 20 }} value={priceTemp}>141.800 đ</Text>
            </View>
                <View style={styles.bottom2}>
                    <Button style={styles.bottomButtom}
                    color={'#e53935'} title='TIẾN HÀNH ĐẶT HÀNG'></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        
      
    },
    top: {
        flex: 3,
        backgroundColor: '#ffffff',
        padding: 15
   
        
    },
    top1: {
        flex: 1.5,
        flexDirection:'row',
      
    },
    top11: {
        flex: 1.5,
        flexDirection:'row',
       
        
    },
    top12: {
        flex: 2.5,
       
       
        
    },
    top121: {
       flexDirection: 'row'
       
       
        
    },
    top2: {
        flex: 0.4,
        flexDirection:'row',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 20
    
        
    },
    top3: {
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    top31: {
        flex: 2,
        flexDirection:'row',
        borderWidth: 1,
        marginLeft: 13,
        padding: 10
        
        
    },
    top32: {
        flex: 1,
        paddingHorizontal: 20,
       
        
    },
    topButtom: {
        flex: 1,
        
        
        
    },
    center: {
        flex: 1,
       
        
    },
    center1: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems: 'center',
        paddingLeft: 20
       
        
    },
    center2: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between'
        
    },
    bottom: {
        flex: 1,
       
        
    },
    bottom1: {
        flex: 1,
        paddingLeft: 20,
        flexDirection:'row',
        justifyContent: 'space-between'
        
    },
    bottom2: {
        flex: 1,
        paddingHorizontal: 20
        
    },
})