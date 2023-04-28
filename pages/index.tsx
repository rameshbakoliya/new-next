import Navbar from "@/components/Navbar";
import Index from "../styles/Index.module.css"
import Image from "next/image";
import Head from "next/head";
const index = () => {
  return (
    <>
    <Head>
      <title>Home Page</title>
    </Head>
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <div className={Index.Heading}>Sita Ram </div>
        <Image src="https://buffer.com/library/content/images/2020/05/Frame-9.png" width="500" height="400" alt="BackImg" >
        </Image>
      </div>
    </>
  )
}

export default index;