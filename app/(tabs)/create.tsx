import {
  Text,
  TextInput,
  Button,
  View,
  Platform,
  Pressable,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { supabase } from '~/utils/supabase';
import { useAuth } from '~/contexts/AuthProvider';
import { router } from 'expo-router';
import Avatar from '~/components/Avatar';
import AddressAutoComplete from '~/components/AddressAutoComplete';

export default function CreateEvent() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState();

  const [imageUrl, setImageUrl] = useState('');

  const [loading, setIsLoading] = useState(false);

  const { user } = useAuth();

  const onChange = (event, selectedDate: Date) => {
    if (selectedDate) {
      setShow(false);
      setDate(selectedDate);
    }
  };

  const showDatepicker = () => {
    setMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    setMode('time');
    setShow(true);
  };

  async function createEvent() {
    setIsLoading(true);
    const long = location.features[0].geometry.coordinates[0];
    const lat = location.features[0].geometry.coordinates[1];

    const { data, error } = await supabase
      .from('events')
      .insert([
        {
          title,
          description,
          image_uri: imageUrl,
          date: date.toISOString(),
          user_id: user.id,
          location: location.features[0].properties.name,
          location_point: `POINT(${long} ${lat})`,
        },
      ])
      .select()
      .single();

    if (error) {
      Alert.alert('Failed to create event, something went wrong');
      console.log(error);
    } else {
      setTitle('');
      setDescription('');
      setDate(new Date());

      router.push(`/event/${data.id}`);
    }
    setIsLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView className="mx-3 my-5 flex-1" contentContainerClassName="gap-3">
        <View className="items-center ">
          <Avatar
            size={200}
            url={imageUrl}
            onUpload={(url: string) => {
              setImageUrl(url);
            }}
          />
        </View>

        {/* Event Name Input */}
        <View className="mt-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm">
          <TextInput
            className="text-xl font-semibold"
            placeholder="Name of your event"
            autoCapitalize="none"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        {/* Event Description Input */}
        <View className="mt-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm">
          <TextInput
            className="min-h-32 text-xl font-semibold"
            multiline
            placeholder="Event description"
            autoCapitalize="none"
            numberOfLines={3}
            value={description}
            onChangeText={setDescription}
          />
        </View>
        {/* Event Date Picker */}
        <View className="mt-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm">
          <Text className="mb-3 text-xl font-semibold text-gray-800">Select Event Date:</Text>

          <View className="flex-row justify-between">
            <View className="mr-2 flex-1">
              <Button onPress={showDatepicker} title="📅 Pick a Date" color="#007bff" />
            </View>
            <View className="ml-2 flex-1">
              <Button onPress={showTimepicker} title="⏰ Pick a Time" color="#28a745" />
            </View>
          </View>

          <Text className="mt-3 text-lg font-medium text-gray-700">
            Selected: {date.toLocaleString()}
          </Text>

          {show && (
            <View className="mt-2">
              <DateTimePicker
                value={date}
                mode={mode}
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
                is24Hour={true}
                onChange={onChange}
              />
            </View>
          )}
        </View>

        <AddressAutoComplete onSelected={(location) => setLocation(location)} />

        {/* Event Location Input
        <View className="mt-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm">
          <TextInput
            className="text-xl font-semibold"
            placeholder="Event Location"
            autoCapitalize="none"
            value={location}
            onChangeText={setLocation}
          />
        </View> */}

        <Pressable
          disabled={loading}
          onPress={() => createEvent()}
          className="mt-auto items-center rounded-md bg-blue-300 p-3 px-8">
          <Text className="text-xl font-bold text-white">Create Event</Text>
        </Pressable>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
}
