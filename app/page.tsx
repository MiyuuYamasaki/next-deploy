import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="coontainer mx auto">
      <div className="flex flex-col h-screen items-center justify-center">
        <h1 className="font-bold text-7xl text-blue-900">Home Page</h1>
        <Link href="/help">help</Link>
        <Link href="/about">about</Link>
      </div>
    </div>
  );
}
