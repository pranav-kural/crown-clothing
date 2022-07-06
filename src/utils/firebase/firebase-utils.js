import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  setDoc,
  collection,
  writeBatch,
  query,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD_60l15InP-s7RbuzQEM4rBtYHMTXvuhQ',
  authDomain: 'crown-clothing-db-11c09.firebaseapp.com',
  projectId: 'crown-clothing-db-11c09',
  storageBucket: 'crown-clothing-db-11c09.appspot.com',
  messagingSenderId: '1031558000323',
  appId: '1:1031558000323:web:b7ca448f53e2491378bc76',
};

// Initialize Firebase
// const firebaseApp = initializeApp(firebaseConfig);
initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    // if user does not exist, create the user and add to db
    const { displayName, email } = userAuth;
    const createdOn = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdOn,
      });
    } catch (err) {
      console.error('Error creating the user', err.message);
    }
  }

  return userDocRef;
};

export const getUserSnapshot = async (userAuth, additionalDetails) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    // if user does not exist, create the user and add to db
    const { displayName, email } = userAuth;
    const createdOn = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdOn,
      });
    } catch (err) {
      console.error('Error creating the user', err.message);
    }
  }

  return userSnapshot;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const authSignInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const addCollectionAndDocuments = async (
  collectionKey,
  ObjectsToAdd
) => {
  // get the collection reference for provided collection key
  const collectionRef = collection(db, collectionKey);
  // instantiate batch writer for database
  const batch = writeBatch(db);
  // create the set operations
  ObjectsToAdd.forEach((object) =>
    batch.set(doc(collectionRef, object.title.toLowerCase()), object)
  );
  // initiate the transcation
  batch.commit();
};

export const getCategoriesAndDocuments = async () => {
  const queryCategories = query(collection(db, 'categories'));
  const querySnapshot = await getDocs(queryCategories);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
