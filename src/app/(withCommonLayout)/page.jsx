import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center ">
      <button className="bg-gradient-to-r from-[#801617] to-[#FF1532]
hover:from-[#FF1532] hover:to-[#801617]
text-white btn rounded-lg transition-all duration-300">click me</button>
    </div>
  );
}
