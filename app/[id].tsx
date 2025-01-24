import { useLocalSearchParams, Stack } from 'expo-router';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import dayjs from 'dayjs';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

import events from '~/assets/events.json';

export default function EventPage() {
  const { id } = useLocalSearchParams();
  const event = events.find((e) => e.id === Number(id));

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
        <Image source={{ uri: event.image }} className="aspect-video w-full rounded-b-xl" />

        {/* Event Details */}
        <View className="p-4">
          {/* Title */}
          <Text className="mb-4 text-3xl font-extrabold text-gray-900">{event.title}</Text>

          {/* Date & Time */}
          <View className="mb-4 flex-row items-center">
            <Feather name="calendar" size={24} color="black" className="mr-2" />
            <View>
              <Text className="text-lg font-semibold text-gray-800">
                {dayjs(event.datetime).format('dddd, D MMMM YYYY')}
              </Text>
              <Text className="text-base text-gray-600">
                {dayjs(event.datetime).format('hh:mm A')}
              </Text>
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
        <Pressable className="mt-2 rounded-xl bg-red-400 p-3">
          <Text className="text-center text-lg font-bold text-white">Join and RSVP</Text>
        </Pressable>
      </View>
    </View>
  );
}
