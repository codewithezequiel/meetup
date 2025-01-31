import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';
import * as Location from 'expo-location';

import { Alert, FlatList } from 'react-native';
import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';
import { NearbyEvent } from '~/types/db';

export default function Events() {
  const [events, setEvents] = useState<NearbyEvent[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const [status, requestPermission] = Location.useForegroundPermissions();

  useEffect(() => {
    if (status && !status.granted && status.canAskAgain) {
      requestPermission();
    }
  }, [status]);

  useEffect(() => {
    async function getCurrentLocation() {
      if (!status?.granted) {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    }

    getCurrentLocation();
  }, [status]);

  useEffect(() => {
    if (location) {
      getNearbyEvents();
    }
  }, [location]);

  // async function getEvents() {
  //   let { data, error } = await supabase.from('events').select('*');
  //   setEvents(data);
  // }

  const getNearbyEvents = async () => {
    if (!location) {
      return;
    }
    const { data, error } = await supabase.rpc('nearby_events', {
      lat: location?.coords.latitude,
      long: location?.coords.longitude,
    });
    // console.log(JSON.stringify(data, null, 2));
    // console.log(error);
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
