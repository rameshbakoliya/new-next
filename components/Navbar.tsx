import Link from "next/link"

export const NavbarN = () => {
    return (
        <>
            <nav className="NavBar-Title">
                <Link href="../blog/Home" className="NavBar-Menu"> Home </Link>
                <Link href="../blog/Gallery" className="NavBar-Menu"> Gallery </Link>
                <Link href="../blog/Event" className="NavBar-Menu"> Event </Link>
                <Link href="../blog/feedback" className="NavBar-Menu"> feedback </Link>
                <Link href="../blog/Contact" className="NavBar-Menu"> Contact  </Link>
            </nav>
        </>
    )
}

 const Navbar = () => {
    return (
        <>
            <nav className="NavBar-Title">
                <Link href="./" className="NavBar-Menu"> Home </Link>
                <Link href="./Gallery" className="NavBar-Menu"> Gallery </Link>
                <Link href="./Event" className="NavBar-Menu"> Event </Link>
                <Link href="./feedback" className="NavBar-Menu"> feedback </Link>
                <Link href="./Contact" className="NavBar-Menu"> Contact  </Link>
            </nav>
        </>
    )
}
export default Navbar