// "use client";
// import { FirstPage } from "@/components/PageOne";
// import { useEffect, useState } from "react";
// import { GetData } from "@/components/getData";
 
// export default function Home() {
//   const [datas, setDatas] = useState([]);
//   const [pages, setPages] = useState(9);
 
//   const getData = async () => {
//     try {
//       const articles = await GetData(
//         `https://dev.to/api/articles?per_page=${pages}`
//       );
//       console.log(articles);
//       setDatas(articles);
//       console.log("data2", datas);
//     } catch (error) {
//       throw console.log("Error", error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, [pages]);
//   return (
//     <div className="w-fit h-fit">
//       <FirstPage datas={datas} />
//     </div>
//   );
// }
 