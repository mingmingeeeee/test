import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';


export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textlogoView}>
	        <Text style={styles.textlogoText}>
					  Re:웃주민
					</Text>
        </View>
        <View style={styles.imagelogoView}>
					<Image source={require('./icon/google.png')}/>
        </View>
        <View style={styles.photoView}>
					<TouchableOpacity style={styles.sendButton}>
						<Text style={styles.photoText}>
						사진찍기
						</Text>
					</TouchableOpacity>
        </View>
				<View style={styles.boardView}>
					<TouchableOpacity style={styles.sendButton}>
						<Text style={styles.boardText}>
							거래게시판
						</Text>
					</TouchableOpacity>
        </View>
				<View style={styles.pageView}>
					<TouchableOpacity style={styles.sendButton}>
						<Text style={styles.pageText}>
							마이페이지
						</Text>
					</TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textlogoView: {
    flex: 0.8,
	justifyContent: 'center',
	alignItems : 'center'

  },
  imagelogoView: {
    flex: 1,
    margin : 30,
	justifyContent: 'center',
	alignItems : 'center',
  },
  photoView: {
    flex: 0.7,
	justifyContent: 'center',
	alignItems : 'center',
  },
	boardView: {
    flex: 0.7,
	justifyContent: 'center',
	alignItems : 'center',
  },
	pageView: {
    flex: 0.7,
	justifyContent: 'center',
	alignItems : 'center',
  },
	textlogoText:{
		fontSize :30,
	},
	photoText:{
		fontSize :30,
		margin : 10,
		fontWeight: 'bold',
		color :'white',
		justifyContent: 'center',
		alignItems : 'center'

	},
	boardText:{
		fontSize :25,
		margin : 20,
		marginLeft : '30%',
		fontWeight: 'bold',
		color :'#4A4A4A',
		justifyContent: 'center',
		alignItems : 'center'

	},
	pageText:{
		fontSize :30,
		fontWeight: 'bold',
		color :'#4A4A4A',
	},
	sendButton:{
		height : 70,
		borderRadius :5,
		backgroundColor : 'green',
        width : '70%'
    },
});