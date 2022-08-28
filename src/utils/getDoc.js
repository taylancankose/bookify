import firestore from '@react-native-firebase/firestore';

export default function () {
  return firestore()
    .collection('users')
    .get()
    .then(item => {
      item.forEach(e => {
        if (e._data.displayName === auth().currentUser.displayName) {
          const usersCollection = firestore().collection('users');
          const userDoc = usersCollection.doc(e.id);
          userDoc.onSnapshot(snap => {
            setBooks(snap?._data?.books?.readLists);
          });
        }
      });
    });
}
