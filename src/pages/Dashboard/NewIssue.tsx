import { useState } from "react"

// TODO:
// Description big input box area, multiple lines, allow paragrah

export const NewIssue = () => {
    const [severity, setSeverity] = useState("None")
    const [name, setName] = useState("")
    const [desc, setDesc] = useState("")
    const [type, setType] = useState("None")

    const submitForm = async () => {

        const stuffToSubmit = {
            severity,
            name,
            desc,
            type
        }

        const response = await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({stuffToSubmit}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
    }

    return (
        <div className="NewIssue__wrapper">
            <div id="Settings__emptypad"></div>
            <div className="NewIssue__container">
                <form className="NewIssue__form" onSubmit={submitForm}>

                    <div className="Title">New Issue</div>
                    <label htmlFor="Severity">Severity</label>
                    <select name="Severity" className="form-select" value={severity} onChange={(e) => setSeverity(e.target.value)}>
                        <option value="Low">None</option>
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