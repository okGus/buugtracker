import { Dropdown, DropdownButton } from "react-bootstrap"

{/* <form className="Settings">
<label htmlFor="name">Name</label>
<input type="text" name="name" placeholder="Critical bug" required />
</form> */}

export const NewIssue = () => {
    return (
        <div className="NewIssue__wrapper">
            <div id="Settings__emptypad"></div>
            <div className="NewIssue__container">
                <div className="Title">New Issue</div>
                <form className="NewIssue__form">
                    <DropdownButton id="dropdown-item-button" title="Severity">
                        
                        <Dropdown.Item as="button">Low</Dropdown.Item>
                        <Dropdown.Item as="button">Medium</Dropdown.Item>
                        <Dropdown.Item as="button">High</Dropdown.Item>
                    </DropdownButton>
                </form>
            </div>
        </div>
    )
}