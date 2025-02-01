import { useEffect, useState } from 'react';
import { FlatList, Pressable, Text, TextInput, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { getSuggestions, retrieveDetails } from '~/utils/AddressAutoComplete';
import { useAuth } from '~/contexts/AuthProvider';

export default function AddressAutoComplete({ onSelected }) {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();

  const { session } = useAuth();

  async function search() {
    const data = await getSuggestions(input, session.access_token);
    setSuggestions(data.suggestions);
  }

  async function onSuggestionClick(suggestion) {
    setSelectedLocation(suggestion);
    setInput(suggestion.name);
    setSuggestions([]);

    const details = await retrieveDetails(suggestion.mapbox_id, session.access_token);

    onSelected(details);
  }

  return (
    <View>
      <View className="mt-2 flex flex-row items-center gap-3">
        <TextInput
          className=" flex-1 rounded-md border border-gray-200 p-3"
          value={input}
          placeholder="Location"
          onChangeText={setInput}
        />
        <FontAwesome onPress={search} name="search" size={24} color="black" />
      </View>
      <View className="gap-2">
        {suggestions.map((item) => (
          <Pressable onPress={() => onSuggestionClick(item)} key={item.name} className="border p-2">
            <Text className="font-bold">{item.name}</Text>
            <Text>{item.place_formatted}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}
