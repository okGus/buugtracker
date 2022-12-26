import { trpc } from "../../utils/trpc"

const MainDash = () => {
    const { data, isLoading } = trpc.useQuery(["get-posts"]);
    
    if (isLoading || !data) return <div>Loading...</div>

    console.log(data)

    return (<div className="MainDash__wrapper">
        <div id="Settings__emptypad"></div>
        <div className="MainDash__container">
            {data.map(posts => {
                return (
                <div key={posts.id} className="post-submission">
                    <p>{posts.email}</p>
                    <p>{posts.severity}</p>
                    <p>{posts.name}</p>
                    <p>{posts.desc}</p>
                </div>)
            })}
        </div>
    </div>)
}

export default MainDash