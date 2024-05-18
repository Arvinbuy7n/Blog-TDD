import Link from "next/link";

// export const Addition = (props) => {

//     return (
//         <div className="hidden">
//             <img src="error.webp" onClick={props.openPage}></img>
//             <Link href="/main">
//                 <p className="text-slate-600 font-sans text-lg hover:bg-blue-700 rounded-lg hover:text-white px-4">Home</p>
//             </Link>
//             <Link href="/ablog">
//                 <p className="text-slate-600 font-sans text-lg hover:bg-purple-700 rounded-lg hover:text-white px-4">Blog</p>
//             </Link>
//             <Link href="/contact">
//                 <p className="text-slate-600 font-sans text-lg hover:bg-cyan-400 rounded-lg hover:text-black px-4">Contact</p>
//             </Link>
//             <Link href="/error"></Link>
//         </div>
//     )
// }
export const Addition = (props) => {
  return (
    <div className="fixed top-0 left-0 flex sm:hidden justify-between z-20 bg-white w-full">
      <div className="flex justify-center py-5 pl-24">
        <Link href="/">
          <p className="text-slate-600 font-bold text-lg hover:bg-blue-700 rounded-lg hover:text-white px-4">
            Home
          </p>
        </Link>
        <Link href="/ablog">
          <p className="text-slate-600 font-bold text-lg hover:bg-purple-700 rounded-lg hover:text-white px-4">
            Blog
          </p>
        </Link>
        <Link href="/contact">
          <p className="text-slate-600 font-bold text-lg hover:bg-cyan-400 rounded-lg hover:text-black px-4">
            Contact
          </p>
        </Link>
        <Link href="/error"></Link>
      </div>
      <img
        src="error.webp"
        className="w-10 h-10 mt-4 mr-4"
        onClick={props.openPage}
      ></img>
    </div>
  );
};
