import Image from "next/image";
import Link from "next/link";

export default function Logo({ size }) {
  return (
    <Link href="/">
      <div className={`relative overflow-hidden`}>
        {/* <p className="tracking-tighter text-3xl font-extrabold">METALBOX</p> */}
        <Image
          className="w-full h-full object-cover"
          width={size}
          height={size}
          alt="Logo"
          src="/logo.png"
        />
      </div>
    </Link>
  );
}
