import NavbarN from "@/components/Navbar"

export const getStaticPaths = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const data = await res.json();

    const paths = data.map((currElem) => {
        return {
            params: {
                pageno: currElem.id.toString(),
            }
        }
    })
    return {
        paths,
        fallback: false,
    }
}
export const getStaticProps = async (constext) => {
    const id = constext.params.pageno;
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const data = await res.json();
    return{
        props:{
            data
        }
    }
}
const myData = ({ data }) => {
    return (
        <>
            <NavbarN />
            <div key={data.id}>
                <h3>{data.id}</h3>
                <h2>{data.title}</h2>
            </div>
        </>
    )
}

export default myData;