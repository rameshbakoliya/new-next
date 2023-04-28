import { useRouter } from "next/router";
import { useEffect } from "react";

const ErrerPage = () => {
    const router = useRouter();
    const HomePage = () => {
        router.push("/")
    }
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000);
    }, [])

    return (
        <>
            <div className="Error-page-massage">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>

                <div className="Error-page">WE ARE SORRY, PAGE NOT FOUND!</div>
                <p> THE PAGE YOU ARE LOOKING FOR MIGHT HAVE REMOVED HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILAVLE</p>
                <button ><a onClick={HomePage}>BACK TO HOME PAGE</a> </button>
            </div>


        </>
    )
}

export default ErrerPage;