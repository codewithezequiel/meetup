import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Alert, View, AppState, TextInput, Button, Pressable, Text } from 'react-native';
import { supabase } from '~/utils/supabase';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View className="flex-1 gap-2 bg-white pt-10">
      <Stack.Screen options={{ title: 'Welcome' }} />
      <View className="mx-3 mt-5 rounded-lg border-2 border-gray-200 p-3">
        <TextInput
          className="text-xl font-semibold"
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
        />
      </View>
      <View className="mx-3 rounded-lg border-2 border-gray-200 p-3">
        <TextInput
          className="text-xl font-semibold"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
        />
      </View>
      <View className="mx-3 flex-row gap-3 ">
        <Pressable
          disabled={loading}
          onPress={() => signInWithEmail()}
          className="flex-1 items-center rounded-md border-2 border-blue-300 p-3 px-8">
          <Text className="text-xl font-bold text-blue-300">Sign in</Text>
        </Pressable>
        <Pressable
          disabled={loading}
          onPress={() => signUpWithEmail()}
          className="flex-1 items-center rounded-md bg-blue-300 p-3 px-8">
          <Text className="text-xl font-bold text-white">Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
}
