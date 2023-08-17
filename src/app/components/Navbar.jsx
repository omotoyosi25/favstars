import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <ul className="flex justify-between h-[100px] bg-black text-white items-center text-3xl">
        <Link href='/'>
        <li>home</li>
        </Link>
        <Link href='/course'>
        <li>course</li>
        </Link>
        <Link href='/about'>
        <li>about</li>
        </Link>
        <Link href='/contact'>
        <li>contact</li>
        </Link>
    </ul>
    </nav>
  )
}
