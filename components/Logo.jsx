import Image from "next/image";
import Link from "next/link";

export default function Logo({ size }) {
  console.log(size);
  return (
    <Link href="/">
      <div className={`relative w-[${size}px] h-[${size}px] overflow-hidden`}>
        {/* <p className="tracking-tighter text-3xl font-extrabold">METALBOX</p> */}
        <Image
          className="w-full h-full object-cover"
          fill
          alt="Logo"
          src="/logo.png"
        />
      </div>
    </Link>
  );
}
