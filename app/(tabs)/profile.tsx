import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { Alert, Button, View, TextInput, Pressable, Text } from 'react-native';
import { useAuth } from '~/contexts/AuthProvider';

import { supabase } from '~/utils/supabase';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  const { session } = useAuth();

  // when session updates, we fetch the profile data
  useEffect(() => {
    if (session) getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const { data, error, status } = await supabase
        .from('profiles')
        .select(`username, website, avatar_url`)
        .eq('id', session?.user.id)
        .single();
      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setWebsite(data.website);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }

  // taking data from state and updating it on supabase
  async function updateProfile({
    username,
    website,
    avatar_url,
  }: {
    username: string;
    website: string;
    avatar_url: string;
  }) {
    try {
      setLoading(true);
      if (!session?.user) throw new Error('No user on the session!');

      const updates = {
        id: session?.user.id,
        username,
        website,
        avatar_url,
        updated_at: new Date(),
      };

      const { error } = await supabase.from('profiles').upsert(updates);

      if (error) {
        throw error;
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <View className="flex-1 bg-white p-5">
      <Stack.Screen options={{ title: 'Profile' }} />

      <TextInput
        className="rounded-md border-gray-200 p-3 text-xl font-semibold  text-gray-600"
        value={session?.user?.email}
        placeholder="email"
        autoCapitalize="none"
        editable={false}
      />

      <TextInput
        className="rounded-md border-gray-200 p-3 text-xl font-semibold  text-gray-600"
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="username"
        autoCapitalize={'none'}
      />

      <TextInput
        className="rounded-md border-gray-200 p-3 text-xl font-semibold  text-gray-600"
        onChangeText={(text) => setWebsite(text)}
        value={website}
        placeholder="website"
        autoCapitalize={'none'}
      />

      <Pressable
        disabled={loading}
        onPress={() => updateProfile({ username, website, avatar_url: avatarUrl })}
        className=" items-center rounded-md border-2 border-blue-300 p-3 px-8">
        <Text className="text-xl font-bold text-blue-300">Save</Text>
      </Pressable>

      <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
