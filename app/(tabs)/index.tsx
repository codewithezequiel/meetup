import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';

import { FlatList } from 'react-native';
import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';

export default function Events() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getEvents();
  }, []);

  async function getEvents() {
    let { data, error } = await supabase.from('events').select('*');
    setEvents(data);
  }

  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList data={events} renderItem={({ item }) => <EventListItem event={item} />} />
    </>
  );
}
