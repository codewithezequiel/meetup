import { Stack } from 'expo-router';
import { View, Text, Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      {/* Event List Item */}
      <View className="mb-4 rounded-xl bg-white p-4 shadow-md">
        <View className="mb-3 flex-row items-start">
          <View className="mr-4 flex-1">
            <Text className="mb-1 text-sm font-semibold uppercase text-amber-700">
              Wed 13 Sep. 19. 19:30 CET
            </Text>
            <Text className="mb-1 text-lg font-bold text-gray-900" numberOfLines={2}>
              This is the title
            </Text>
            <Text className="text-base text-gray-600">Casa Batllo</Text>
          </View>
          <Image
            source={{
              uri: 'https://www.annum-munir.com/hs-fs/hubfs/Images/Adventure/Barcelona/muslim-travel-blog-Barcelona-Spain-Casa-Batllo-tour.jpg?width=4032&name=muslim-travel-blog-Barcelona-Spain-Casa-Batllo-tour.jpg',
            }}
            className="aspect-video w-2/5 rounded-xl"
          />
        </View>

        <View className="flex-row items-center">
          <Text className="mr-auto text-sm text-gray-600">16 going</Text>
          <Feather name="share" size={24} color="gray" />
          <View className="mx-2" />
          <Feather name="bookmark" size={24} color="gray" />
        </View>
      </View>
    </>
  );
}
