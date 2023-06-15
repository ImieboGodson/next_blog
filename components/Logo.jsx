import Image from "next/image";
import Link from "next/link";

export default function Logo({ size }) {
  return <Image width={size} height={size} alt="Logo" src="/logo.png" />;
}
