import { Text, TextInput, View } from 'react-native';

export default function CreateEvent() {
  return (
    <>
      <View className="mx-3 rounded-lg border-2 border-gray-200 p-3">
        <TextInput
          className="text-xl font-semibold"
          placeholder="Name of your event"
          autoCapitalize={'none'}
        />
      </View>
      <View className="mx-3 rounded-lg border-2 border-gray-200 p-3">
        <TextInput
          className="min-h-32 text-xl font-semibold"
          multiline
          placeholder="Event description"
          autoCapitalize={'none'}
          numberOfLines={3}
        />
      </View>
      <View className="mx-3 rounded-lg border-2 border-gray-200 p-3">
        <TextInput
          className="text-xl font-semibold"
          placeholder="Event Date (dd/mm/yyyy)"
          autoCapitalize={'none'}
        />
      </View>
      <View className="mx-3 rounded-lg border-2 border-gray-200 p-3">
        <TextInput
          className="text-xl font-semibold"
          placeholder="Event Location"
          autoCapitalize={'none'}
        />
      </View>
    </>
  );
}
