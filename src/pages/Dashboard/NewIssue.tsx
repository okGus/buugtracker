import { useUser } from "@auth0/nextjs-auth0"
import { useState } from "react"
import { trpc } from "../../utils/trpc"

const NewIssue = () => {
    const [severity, setSeverity] = useState("None")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("None")

    const client = trpc.useContext();
    const { mutate } = trpc.useMutation(["create"], {
        onSuccess: () => {
            client.invalidateQueries(["get-posts"]);
        }
    })
    const { user } = useUser();
    const SubmitForm = () => {
        let user_email = ""
        if (typeof user?.email !== "undefined" && user.email !== null) {
            user_email = user.email
        }
        mutate({ email: user_email, severity: severity, name: name, desc: desc, type: type })
    }
    
    return (
        <div className="NewIssue__wrapper">
            <div id="Settings__emptypad"></div>
            <div className="NewIssue__container">
                <form className="NewIssue__form" onSubmit={SubmitForm}>

                    <div className="Title">New Issue</div>
                    <label htmlFor="Severity">Severity</label>
                    <select name="Severity" className="form-select" value={severity} onChange={(e) => setSeverity(e.target.value)}>
                        <option value="None">None</option>
                        <option value="Low">Low</option>
                        <option value="Mid">Mid</option>
                        <option value="High">High</option>
                    </select>

                    <label htmlFor="Type">Type</label>
                    <select name="Type" className="form-select" value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="None">None</option>
                        <option value="Issue">Issue</option>
                        <option value="Buug">Buug</option>
                    </select>

                    <label htmlFor="Name">Name</label>
                    <input required type="text" value={name} onChange={(e) => setName(e.target.value)}/>

                    <label htmlFor="Description">Description</label>
                    <textarea required className="description" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

                    <br></br>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default NewIssue