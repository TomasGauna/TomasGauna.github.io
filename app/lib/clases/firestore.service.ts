import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, DocumentData } from 'firebase/firestore';

export class FirestoreService {
  firebaseConfig = {
    apiKey: "AIzaSyBCGgfP_sD9_0ek2gcGlZmAnkLD-QOIMgQ",
    authDomain: "simulacro-c5b3e.firebaseapp.com",
    projectId: "simulacro-c5b3e",
    storageBucket: "simulacro-c5b3e.appspot.com",
    messagingSenderId: "51934691690",
    appId: "1:51934691690:web:fd8e50a5af3fb9e3792513"
  };
  db: any;

  constructor() {
    const firebaseApp = initializeApp(this.firebaseConfig);
    this.db = getFirestore(firebaseApp);
  }

  getUsers = async () => {
    try {
      const snapshot = await getDocs(collection(this.db, 'users'));
      const users: DocumentData[] = [];
      snapshot.forEach((doc: any) => {
        users.push(doc.data());
      });
      return users;
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  };

  addUser = async (userData: any) => {
    try {
      const docRef = await addDoc(collection(this.db, 'users'), userData);
      console.log('Documento añadido con ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error al añadir usuario:', error);
      throw error;
    }
  };
}
