import {  getDoc , } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase/firebase" 

export default function SearchBar() {
  const getData = async () => {
    const docRef = doc(db, "courses", "TT");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      console.log("No such document!");
    }
  };

  return (
    <>
      <label
        className="mx-auto mt-40 relative bg-white min-w-sm max-w-2xl flex flex-col md:flex-row items-center justify-center border py-2 px-2 rounded-2xl gap-2 shadow-2xl focus-within:border-gray-300"
        id="search">
        <input
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
          placeholder="Search any topic"
          className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white" />
        <button
          type="submit"
          onClick={getData}
          className="w-full md:w-auto px-6 py-3 bg-black border-black text-white fill-white active:scale-95 duration-100 border will-change-transform overflow-hidden relative rounded-xl transition-all disabled:opacity-70">
          <div className="relative">
            <div className="flex items-center justify-center w-3 absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 transition-all"></div>
            <div className="flex items-center transition-all opacity-1 valid:">
              <span className="text-sm font-semibold whitespace-nowrap truncate mx-auto">Search</span>
            </div>
          </div>
        </button>
      </label>
    </>
  );
}
