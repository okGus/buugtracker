/*
Panel Margin top and Panel_content margni top fix
*/

import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image';

const Settings = () => {
    const { user } = useUser();
    // const pictureLink = user?.picture
    // <Image alt="user image" src={user?.picture ?? "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} width={100} height={100}/>

    return (
        <div className="Settings__wrapper">
            <div id="Settings__emptypad"></div>
            <div className="Settings__container">
                <div className="Title">Basic Info</div>
                <div className="Settings__Image__Wrapper">
                    <Image className="rounded-circle" alt="user image" src={user?.picture ?? "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} width={68} height={68} />
                </div>
                <div className="User__name">
                    <span className="details">Name</span>
                    <input type="text" placeholder={user?.name ?? "Enter your name"}></input>
                </div>
                <div className="User__birthday">
                    <span className="details">Birthday</span>
                    <input className="bday-input" type="date"></input>
                </div>
                <div className="User__gender">
                    <span className="details">Gender</span>
                    <input type="text" placeholder="Male, Female, etc"></input>
                </div>
            </div>
            <br></br>
            <div className="Settings__container">
                <div className="Title">Contact Info</div>
                <div className="User__email">
                    <span className="details">Email</span>
                    <input type="text" placeholder={user?.email ?? "Enter your email"}></input>
                </div>
            </div>
        </div>
    )
}

export default Settings