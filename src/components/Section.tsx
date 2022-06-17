import { useEffect, useState } from "react";

function useWindowSize() {
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    return width;
}

export function Section() {
    const width = useWindowSize();
    return (
        <>
        <div className="content" style={{ 
            position: "absolute", 
            marginTop: "56px",
            backgroundImage: "linear-gradient(to right, #12caee, #11b8d9, #0f96b0)",
            width: width,
            height: "300px"}}>
        <div style={{ 
            textAlign: "center",
            marginTop: "100px"
         }}><h1>Buug</h1></div>
        </div>
        </>
    );
}
// in section.css that you will have to create
// maybe have them in their won folder
// have position: absolute;