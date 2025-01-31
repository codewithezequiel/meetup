import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';

import { FlatList } from 'react-native';
import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';
import { NearbyEvent } from '~/types/db';

export default function Events() {
  const [events, setEvents] = useState<NearbyEvent[]>([]);
  useEffect(() => {
    getNearbyEvents();
  }, []);

  // async function getEvents() {
  //   let { data, error } = await supabase.from('events').select('*');
  //   setEvents(data);
  // }

  const getNearbyEvents = async () => {
    const { data, error } = await supabase.rpc('nearby_events', {
      lat: 33.881623,
      long: -118.14207,
    });
    console.log(JSON.stringify(data, null, 2));
    console.log(error);
    if (data) {
      setEvents(data);
    }
  };

  // lat : 33.88162330579655,
  // long : -118.14207084055285

  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      <FlatList data={events} renderItem={({ item }) => <EventListItem event={item} />} />
    </>
  );
}
