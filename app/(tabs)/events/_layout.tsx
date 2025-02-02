import { Tabs, Link, Stack } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function EventsTabLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerRight: () => (
            <Link href="/(tabs)/events/map">
              <Ionicons name="globe-outline" size={24} color="black" />
            </Link>
          ),
        }}
      />
    </Stack>
  );
}
