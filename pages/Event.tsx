
import Navbar from "@/components/Navbar"
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const Data = await res.json();

    return {
        props: {
            Data
        }
    }
}
const Event = ({ Data }) => {
    return (
        <>
            <Navbar />
            {Data.slice(0, 100).map((CurrElem) => {
                return (<div key={CurrElem.id}>
                    <h3>{CurrElem.id}</h3>
                    <Link href={`/blog/${CurrElem.id}`}> <h2>{CurrElem.title}</h2></Link>
                   
                </div>
                )
            })}
        </>
    )
}

export default Event