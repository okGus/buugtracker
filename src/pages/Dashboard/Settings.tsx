{/* <form className="Settings">
<label htmlFor="name">Name</label>
<input type="text" name="name" placeholder="Critical bug" required />
</form> */}
import { useUser } from '@auth0/nextjs-auth0'
import Image from 'next/image';

export const Settings = () => {
    const { user } = useUser();
    // const pictureLink = user?.picture
    // <Image alt="user image" src={user?.picture ?? "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} width={100} height={100}/>
    console.log(user)

    return <div className="Settings__wrapper">
        <div className="Settings__container">
            <div className="Title">Basic Info</div>
            <div className="Settings__Image__Wrapper">
                <Image className="rounded-circle" alt="user image" src={user?.picture ?? "https://www.kindpng.com/picc/m/252-2524695_dummy-profile-image-jpg-hd-png-download.png"} width={68} height={68}/>
            </div>
            <div className="User__name">
                <span className="details">Name</span>
                <input type="text" placeholder={user?.name ?? "Enter your name"}></input>
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
}