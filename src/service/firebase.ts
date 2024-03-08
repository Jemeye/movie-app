import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, signOut, getAuth, onAuthStateChanged, createUserWithEmailAndPassword, sendEmailVerification, UserCredential } from "firebase/auth";
import { collection, doc, getDoc, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfLbH8wYoZ2Vf61pjJoEfFmltvNBKu6-8",
  authDomain: "pruebabemaster-3ca6b.firebaseapp.com",
  projectId: "pruebabemaster-3ca6b",
  storageBucket: "pruebabemaster-3ca6b.appspot.com",
  messagingSenderId: "28420823088",
  appId: "1:28420823088:web:4c7020296a0898e6c4f5f5",
  measurementId: "G-GVRNGHKLWN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);

export const firebaseService = () => {

  //Function to sign in
  const signInUser = (email: string, password: string): Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
      signInWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          resolve(userCredential);
        })
        .catch(error => {
          reject(error.message);
        });
    });
  };

  //Function to sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  //function to verified is a session is started
  const isLogged = () => {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          resolve(user);
        } else {
          reject(false);
        }
      });
    });
  }

  //Function to register a user
  const registerUser = (email: string, password: string) : Promise<UserCredential> => {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential => {
          sendEmailVerification(userCredential.user)
          .then(() => {
            resolve(userCredential);
          })
          .catch(verificationError => {
            reject(verificationError.message);
          });
        })
        .catch(error => {
          reject(error.message);
        });
    });
  };

  //Function to retrieve category collection in Firestore
  const getCategoryData = async () => {
    const querySnapshot = await getDocs(collection(database, "moviesCategory"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      name: doc.data().name,
      img: doc.data().img,
      endPoint: doc.data().endPoint
    }));
    const categories = newData.map((item) => {
      return {
        name: item.name,
        img: item.img,
        endPoint: item.endPoint
      }
    })
    return categories;
  };

  //Function to retrieve movies collection in Firestore
  const getMoviesData = async (category: string) => {
    const querySnapshot = await getDocs(collection(database, "moviesCollection"));
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
      name: doc.data().name,
      director: doc.data().director,
      year: doc.data().year,
      synopsis: doc.data().synopsis,
      duration: doc.data().duration,
      category: doc.data().category,
      image: doc.data().image,
      trailer: doc.data().trailer
    }));
    const movies = newData.filter(movie => movie.category.toUpperCase() === category.toUpperCase());
    return movies
  };

  //Function to get movie by id
  const getMovieById = async (movieId: string) => {
    const docRef = doc(database, "moviesCollection", movieId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        const movieData = {
            ...docSnap.data(),
            id: docSnap.id,
            name: docSnap.data().name,

            director: docSnap.data().director,
            year: docSnap.data().year,
            synopsis: docSnap.data().synopsis,
            duration: docSnap.data().duration,
            category: docSnap.data().category,
            image: docSnap.data().image,
            trailer: docSnap.data().trailer
        };
        return movieData;
    } else {
        throw new Error("No movie found with the specified ID");
    }
};

  return {
    signInUser,
    signOutUser,
    isLogged,
    registerUser,
    getCategoryData,
    getMoviesData,
    getMovieById
  };
};