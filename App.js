/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import 'react-native-gesture-handler';
import React, {useEffect, useState, component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, HomeScreen} from './screens';
import {FormPage} from './screens';
import {firebase} from './firebase/config';
import {decode, encode} from 'base-64';
if (!global.btoa) {
  global.btoa = encode;
}
if (!global.atob) {
  global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen name="Home">
            {(props) => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            {/*<Stack.Screen name="Registration" component={RegistrationScreen} />*/}
            <Stack.Screen name="Dashboard" component={HomeScreen} />
            {/*<Stack.Screen name="FormPage" component={FormPage} />*/}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
import React, {useState, component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  //TouchableOpacity,
  Text,
  StatusBar,
  TextInput,
  Picker,
  //Colors,
  Button,
  //Separator,
} from 'react-native';
//import * as firebase from 'firebase';
//import {firebaseConfig} from './config';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Separator = () => <View style={styles.separator} />;
const handlePress = () => false;
const App: () => React$Node = () => {
  const [currency, setCurrency] = useState('None');
  const [pMethod, setpMethod] = useState('None');
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Without-Bill Entry</Text>
            </View>
            <View>
              <Text style={styles.section}>Bill details :</Text>
              <TextInput
                textContentType="none"
                multiline={true}
                placeholder="Bill Details "
                marginLeft={20}
              />
              <Separator />
              <Text style={styles.section}>Bill amount :</Text>
              <TextInput
                keyboardType="numeric"
                placeholder="Bill Amount "
                marginLeft={20}
              />
              <Separator />
              <Text style={styles.section}>Currency :</Text>
              <View style={styles.pick}>
                <Picker
                  placeholder="-"
                  selectedValue={currency}
                  onValueChange={(currentCurrency) =>
                    setCurrency(currentCurrency)
                  }>
                  <Picker.Item label="INR ₹ " value="Rupee" />
                  <Picker.Item label="USD $ " value="US Dollars" />
                  <Picker.Item label="EUR € " value="Euro" />
                  <Picker.Item label="SGD S$ " value="Singapore Dollars" />
                </Picker>
                <View>
                  <Text style={styles.select}>
                    Selected: <Text style={styles.highlight}>{currency} </Text>
                  </Text>
                </View>
              </View>
              <Separator />
              <Text style={styles.section}>Date :</Text>
              <TextInput
                textContentType="none"
                keyboardType="numbers-and-punctuation"
                multiline={true}
                placeholder="dd/mm/yy"
                marginLeft={20}
              />
              <Separator />
              <Text style={styles.section}>Payment Method :</Text>
              <View style={styles.pick}>
                <Picker
                  placeholder="Payment method"
                  selectedValue={pMethod}
                  onValueChange={(currentpMethod) =>
                    setpMethod(currentpMethod)
                  }>
                  <Picker.Item label="Cash" value="Cash" />
                  <Picker.Item label="Card " value="Card" />
                </Picker>
                <Text style={styles.select}>
                  Via: <Text style={styles.highlight}>{pMethod} </Text>
                </Text>
              </View>
              <Separator />
              <View style={styles.saveBut}>
                <Button onPress={handlePress} title="Save" color="grey" />
              </View>
              <View style={styles.saveBut}>
                <Button onPress={handlePress} title="Cancel" color="black" />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  select: {
    marginLeft: 20,
    fontSize: 15,
  },
  saveBut: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  section: {
    fontSize: 20,
    marginLeft: 20,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 30,
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  sectionTitle: {
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
    color: Colors.black,
  },
  pick: {
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 15,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
*/
