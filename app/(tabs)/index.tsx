import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';
import * as Location from 'expo-location';

import { Alert, FlatList, Text } from 'react-native';
import { supabase } from '~/utils/supabase';
import { useEffect, useState } from 'react';
import { NearbyEvent } from '~/types/db';

export default function Events() {
  const [events, setEvents] = useState<NearbyEvent[]>([]);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [loading, setLoading] = useState(false); // ✅ Added to track loading state

  const [status, requestPermission] = Location.useForegroundPermissions();

  // ✅ Request permission manually when component mounts
  useEffect(() => {
    async function requestLocationPermission() {
      if (!status) return;
      if (!status.granted && status.canAskAgain) {
        const permission = await requestPermission();
        if (!permission.granted) {
          Alert.alert(
            'Permission Denied',
            'You need to enable location services to see nearby events.'
          );
          return;
        }
      }
    }

    requestLocationPermission();
  }, [status]);

  // ✅ Get user location once permission is granted
  useEffect(() => {
    async function getCurrentLocation() {
      if (!status?.granted) return;

      try {
        setLoading(true);
        let userLocation = await Location.getCurrentPositionAsync({});
        setLocation(userLocation);
      } catch (error) {
        Alert.alert('Error', 'Unable to fetch location. Make sure location services are enabled.');
      } finally {
        setLoading(false);
      }
    }

    if (status?.granted) {
      getCurrentLocation();
    }
  }, [status?.granted]);

  // ✅ Fetch nearby events after getting location
  useEffect(() => {
    async function getNearbyEvents() {
      if (!location) return;

      const { data, error } = await supabase.rpc('nearby_events', {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      });

      if (error) {
        console.error('Error fetching nearby events:', error);
      } else {
        setEvents(data);
      }
    }

    getNearbyEvents();
  }, [location]);

  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />
      {loading ? (
        <Text>Loading events...</Text>
      ) : (
        <FlatList data={events} renderItem={({ item }) => <EventListItem event={item} />} />
      )}
    </>
  );
}
