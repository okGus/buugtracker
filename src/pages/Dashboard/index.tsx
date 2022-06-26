import type { NextPage } from 'next'
import { NavbarLogout } from '../../components/NavbarLogout'
import { SideNav } from '../../components/SideNav'

const Dashboard: NextPage = () => {
    return (
        <>
        <div className="DashboardNavWrapper">
            <SideNav />
            <div className="DasboardPage">
                <NavbarLogout />
            </div>
        </div>
        </>
    )
}

export default Dashboard