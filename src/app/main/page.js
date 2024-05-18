import Second from "@/app/second/Second";
import Trend from "@/app/trend/Trend";
import Blog from "@/app/blog/Blog";

export default function Home() {
  return (
    <div className={`w-screen h-full bg-white md:m-auto max-w-[1600px]`}>
      <Second />
      <Trend />
      <Blog />
    </div>
  );
}
