import Link from "next/link";


export default function Navbar(){


  return (<div className="navbar bg-neutral">
          <Link href="/cars">
  <button className="btn btn-ghost btn-xl text-xl">Car shop</button>
</Link></div>)
}
