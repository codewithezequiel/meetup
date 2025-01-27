import { View, Text, Image, Pressable } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import dayjs from 'dayjs';
import { Link } from 'expo-router';

export default function EventListItem({ event }) {
  return (
    <>
      {/* Event List Item */}
      <Link href={`/${event.id}`} asChild>
        <Pressable className="mx-2 mb-2 rounded-xl bg-white p-4 shadow-md">
          <View className="mb-3 flex-row items-start">
            <View className="mr-4 flex-1">
              <Text className="mb-1 text-sm font-semibold uppercase text-amber-700">
                {dayjs(event.date).format('ddd, D MMM')} . {dayjs(event.date).format('hh:mm A')}
              </Text>
              <Text className="mb-1 text-lg font-bold text-gray-900" numberOfLines={2}>
                {event.title}
              </Text>

              <Text className="text-base text-gray-600">{event.location}</Text>
            </View>
            <Image
              source={{
                uri: event.image_uri,
              }}
              className="aspect-video w-2/5 rounded-xl"
            />
          </View>

          <View className="flex-row items-center">
            <Text className="mr-auto text-sm text-gray-600">15 going</Text>
            <Feather name="share" size={24} color="gray" />
            <View className="mx-2" />
            <Feather name="bookmark" size={24} color="gray" />
          </View>
        </Pressable>
      </Link>
    </>
  );
}
