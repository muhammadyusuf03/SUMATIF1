import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
} from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'
const firebaseConfig = {
  apiKey: "AIzaSyCc1wHk5iGp2sjK730kCcPVo07WWjmfDSQ",
  authDomain: "insan-cermarlang.firebaseapp.com",
  projectId: "insan-cermarlang",
  storageBucket: "insan-cermarlang.appspot.com",
  messagingSenderId: "1069260701472",
  appId: "1:1069260701472:web:61ce42d34ba2eb27fba145",
  measurementId: "G-DNS9DFZZZN"
};
// Inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDataPelanggan() {
  const refDokumen = collection(basisdata, "Pelanggan");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);
  
  let hasilKueri = []; 
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama,
      tlpon: dokumen.data().tlpon
    })
  })
  
  return hasilKueri;
}

export async function tambahDataPelanggan(nama,tlpon){
  try {
  // menyimpan data ke firebase
  const refDokumen = await addDoc(collection(basisdata, "Pelanggan"), {
    nama: nama,
    tlpon: tlpon
  })
  
  // menampilkan pesan berhasil
  console.log("berhasip menyimpan data pelanggan")
} catch (e) {
  // menampilkan pesan gagal
  console.log("gagal menyimpan data pelanggan"+ e)
}
  }
