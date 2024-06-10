import Link from "next/link";

export default function Home() {
  return (
    <div className="coontainer mx auto">
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="font-bold text-5xl text-yellow-700">Help Page</h1>
        <Link href="/">Home</Link>
      </div>
    </div>
  );
}