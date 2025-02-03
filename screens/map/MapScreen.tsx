import { Map } from '@/features/map/Map';
import { PostLocation } from '@/features/posts/types';
import { StackScreenProps } from '@react-navigation/stack';

type MapLocation = {
  location: {
    location: PostLocation;
  };
};

type MapScreenProps = StackScreenProps<MapLocation>;

export const MapScreen = ({ route }: MapScreenProps) => {
  const { location } = route.params;

  return <Map location={location} />;
};
