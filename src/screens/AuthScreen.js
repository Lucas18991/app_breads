import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { COLORS } from "../constants/colors";
import { useDispatch } from "react-redux";
import { signUp } from "../store/actions/auth.action";
import { Input } from "../components/Input";
import { useReducer } from "react";
import { useEffect } from "react";
import { useCallback } from "react";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";
const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updateValues = {
      ...state.inputValues,
      [action.input]: action.isValid,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updateValues,
    };
  }
};

export default function AuthScreen() {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [formState, formDispatch] = useReducer(formReducer, {
    inputValues: {
      email: "",
      password: "",
    },
    inputValidities: {
      email: false,
      password: false,
    },
    formIsValid: false,
  });

  useEffect(() => {
    if (error) {
      Alert.alert("Ocurrio un error", error, [{ text: "Ok" }]);
    }
  });

  const handleSignUp = () => {
    dispatch(signUp(email, password));
  };

  const onInputChangeHandler = useCallback(
    (inputIdentifier, InputValue, InputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: InputValue,
        isValid: InputValidity,
        Input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );
  return (
    <KeyboardAvoidingView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Panaderia Login</Text>
        <View>
          <TextInput
            style={styles.input}
            id="email"
            placeholder="email"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={setEmail}
            initialValue=""
          />
          <TextInput
            style={styles.input}
            id="password"
            placeholder="password"
            keyboardType="default"
            secureTextEntry
            minlength={6}
            autoCapitalize="none"
            onChangeText={setPassword}
            initialValue=""
          />
        </View>
        <View>
          <Button
            title="Registrarme"
            color={COLORS.primary}
            onPress={handleSignUp}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    maxWidth: 400,
    backgroundColor: "#fff",
    height: "50%",
    padding: 12,
  },
  title: {
    fontSize: 24,
    marginBottom: 18,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
