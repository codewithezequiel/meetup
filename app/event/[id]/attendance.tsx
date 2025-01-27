import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { supabase } from '~/utils/supabase';

export default function EventAttendance() {
  const [attendees, setAttendees] = useState(0);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    fetchAttendees();
  }, [id]);

  async function fetchAttendees() {
    const { data } = await supabase.from('attendance').select('*, profiles(*)').eq('event_id', id);

    setAttendees(data);
  }

  console.log(attendees);

  return (
    <>
      <FlatList
        data={attendees}
        renderItem={({ item }) => (
          <View className="p-3">
            <Text className="font-bold">{item.profiles.full_name || 'User'}</Text>
          </View>
        )}
      />
    </>
  );
}
