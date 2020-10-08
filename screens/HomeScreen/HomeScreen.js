/* eslint-disable prettier/prettier */
/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, {useState , Component, props} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Text,onPress,Button,AppRegistry, TouchableOpacity, View, NativeAppEventEmitter} from 'react-native';
import auth from '@react-native-firebase/auth';
import styles from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { firebase } from '../../firebase/config';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { color } from 'react-native-reanimated';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
//import { FormPage } from '../FormPage';

//LOGOUT BUTTON ###########################################
/*export default function HomeScreen({navigation}) {
  onLogoutPress = ()=>{
    firebase
    .auth()
    .signOut()
    .then(() => console.log('User signed out!'),
    navigation.navigate('LoginScreen'));
  };
  return (
   <KeyboardAwareScrollView>
      <View style={styles.container}>
          <TouchableOpacity style={styles.buttonLO} onPress={() => onLogoutPress()}>
            <Text style={styles.buttonTitleLO}>Log out</Text>
          </TouchableOpacity>
      </View>
      <NavigationContainer independent={true}>
        <Tab.Navigator >
          <Tab.Screen name="Add Expense" component={AddExpense} />
          <Tab.Screen name="View Report" component={ViewReport} />
        </Tab.Navigator>
      </NavigationContainer>
   </KeyboardAwareScrollView>
  );
}*/
const Tab = createBottomTabNavigator();
const ViewReportStack = createStackNavigator();
const AddExpStack = createStackNavigator();
funtion ViewRepStackScreen (navigation)
{
  return (
    <ViewReportStack.Navigator>
      <ViewReportStack.Screen name="View Report" component={ViewReportScreen}/>
    </ViewReportStack.Navigator>
  );
}


function ViewReportScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{padding:20}}>
      <Text style={{fontSize:25, fontFamily:''}}>View Report</Text>
      </View>
      <View style={styles.button}>
        <Button
          //onPress={ViewSummary}
          title="View Summary"
          color="green"

        />
      </View>
      <View style={styles.button}>
        <Button
          //onPress={ModifyEntry}
          title="Modify Entry"
          color="green"
        />
      </View>
    </View>
  );
}

function AddExpStackScreen() {
  return (
    <AddExpStack.Navigator>
      <AddExpStack.Screen name="Add Expense" component={AddExpenseScreen} />
      <AddExpStack.Screen name="Without Bill" component={FormPage} />

    </AddExpStack.Navigator>
  );
}
export default function HomeScreen() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#008000',
          inactiveTintColor: '#000',
        }
        }>
        <Tab.Screen
            options={{
                tabBarIcon: ({color} )=> <Icon
                name="plus"
                size={30}
                title= "Add Expense"
                color={color} />,
            }}
            name="Add Expense" component={AddExpStackScreen}
        />
        <Tab.Screen
            options={{
              tabBarIcon: ({color} )=> <Icon
              name="info"
              size={30}
              color={color} />,
            }}
            name="View Report" component={ ViewReportScreen }
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

 function AddExpenseScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{padding:20}}>
        <Text style={{fontSize:25, fontFamily:''}}>Add Expense</Text>
      </View>
      <View style = {styles.button}>
        <Button
          //onPress={ScanButton}
          title="Scan"
          color="green"
        />
      </View >
      <View style={styles.button}>
        <Button
          //onPress={UploadFromGallery}
          title="Upload from gallery"
          color="green"

        />
      </View>
      <View style={styles.button}>
          <Button
           onPress={()=> navigation.navigate('FormPage')}
           title="Without Bill"
           color="green"
          />
      </View>
    </View>
  );
}

function FormPage ({navigation}){
  return (
    <View>
        <Text> FORM PAGE </Text>
      </View>
  );
  }


