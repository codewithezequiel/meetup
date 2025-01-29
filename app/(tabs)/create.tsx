import { Text, TextInput, Button, View, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

export default function CreateEvent() {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');

  const onChange = (event, selectedDate) => {
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

  const handleSubmit = () => {
    console.log('Event Created:', {
      name: eventName,
      description: eventDescription,
      date: date.toISOString(),
      location: eventLocation,
    });
    // Later, send this data to Supabase
  };

  return (
    <View className="mx-3 my-5">
      {/* Event Name Input */}
      <View className="mt-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm">
        <TextInput
          className="text-xl font-semibold"
          placeholder="Name of your event"
          autoCapitalize="none"
          value={eventName}
          onChangeText={setEventName}
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
          value={eventDescription}
          onChangeText={setEventDescription}
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
              modal
            />
          </View>
        )}
      </View>

      {/* Event Location Input */}
      <View className="mt-4 rounded-lg border-2 border-gray-300 bg-white p-4 shadow-sm">
        <TextInput
          className="text-xl font-semibold"
          placeholder="Event Location"
          autoCapitalize="none"
          value={eventLocation}
          onChangeText={setEventLocation}
        />
      </View>

      {/* Submit Button */}
      <View className="mt-5">
        <Button title="Create Event" onPress={handleSubmit} />
      </View>
    </View>
  );
}
