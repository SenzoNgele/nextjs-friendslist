import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
    return (
      <nav>
        <div className="logo">
          <Image src="/friendship.png" width={110} height={77} />
        </div>
        <Link href={"/"}><a>Home</a></Link>
        <Link href={"/about"}><a>About</a></Link>
        <Link href={"/friends"}><a>Friends List</a></Link>
      </nav>
    );
}
 
export default NavBar;