import { useState } from "react"

{/* <form className="Settings">
<label htmlFor="name">Name</label>
<input type="text" name="name" placeholder="Critical bug" required />
</form> */}

export const NewIssue = () => {
    const [severity, setSeverity] = useState("")

    const submitForm = async () => {
        const response = await fetch('/api/form', {
            method: 'POST',
            body: JSON.stringify({severity}),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div className="NewIssue__wrapper">
            <div id="Settings__emptypad"></div>
            <div className="NewIssue__container">
                <div className="Title">New Issue</div>
                <form className="NewIssue__form" onSubmit={submitForm}>
                    <label htmlFor="Severity">Severity</label>
                    <select name="Severity" className="form-select" onChange={(e) => setSeverity(e.target.value)}>
                        <option value="Low">Low</option>
                        <option value="Mid">Mid</option>
                        <option value="High">High</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}