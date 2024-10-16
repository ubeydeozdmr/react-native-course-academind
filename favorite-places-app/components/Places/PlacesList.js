import { FlatList } from 'react-native';

function PlacesList({ places }) {
  return <FlatList data={places} renderItem={(item) => item.id} />;
}

export default PlacesList;
