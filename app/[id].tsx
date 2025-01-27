import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image, ScrollView, Pressable, ActivityIndicator } from 'react-native';
import dayjs from 'dayjs';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';
import { useAuth } from '~/contexts/AuthProvider';

export default function EventPage() {
  const { id } = useLocalSearchParams();

  const [event, setEvent] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    getEvent();
  }, []);

  async function getEvent() {
    setLoading(true);
    const { data, error } = await supabase.from('events').select('*').eq('id', id).single();
    setEvent(data);

    const { data: attendanceData } = await supabase
      .from('attendance')
      .select('*')
      .eq('user_id', user.id)
      .eq('event_id', id)
      .single();
    setAttendance(attendanceData);

    setLoading(false);
  }

  async function joinEvent() {
    const { data, error } = await supabase
      .from('attendance')
      .insert({ user_id: user.id, event_id: event.id })
      .select()
      .single();

    setAttendance(data);
  }

  if (loading) {
    return <ActivityIndicator />;
  }

  if (!event) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-lg font-bold text-gray-700">Event not found</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <Stack.Screen
        options={{ title: 'Event', headerBackTitle: 'return', headerTintColor: 'black' }}
      />
      <ScrollView className="flex-1">
        {/* Event Image */}
        <Image source={{ uri: event.image_uri }} className="aspect-video w-full rounded-b-xl" />

        {/* Event Details */}
        <View className="p-4">
          {/* Title */}
          <Text className="mb-4 text-3xl font-extrabold text-gray-900">{event.title}</Text>

          {/* Date & Time */}
          <View className="mb-4 flex-row items-center">
            <Feather name="calendar" size={24} color="black" className="mr-2" />
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                {dayjs(event.date).format('dddd, D MMMM YYYY')}
              </Text>
              <Text className="text-base text-gray-600">{dayjs(event.date).format('hh:mm A')}</Text>
            </View>
            <Feather name="arrow-right" size={24} color="black" className="ml-4" />
          </View>

          {/* Location */}
          <View className="flex-row items-center">
            <EvilIcons name="location" size={28} color="black" className="mr-2" />
            <Text className="text-lg text-gray-700">{event.location}</Text>
          </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View className="absolute bottom-10 left-0 right-0 border-t-2 border-gray-400 p-4">
        <Text className="text-center text-lg font-semibold text-black">Free</Text>
        {attendance ? (
          <Text className="font-bold text-green-500">You are attending!</Text>
        ) : (
          <Pressable onPress={() => joinEvent()} className="mt-2 rounded-xl bg-red-400 p-3">
            <Text className="text-center text-lg font-bold text-white">Join and RSVP</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
