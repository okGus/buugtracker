import type { NextPage } from 'next'
import { ScriptProps } from 'next/script'
import { ReactElement, ReactNode } from 'react'
import { NavbarLogout } from '../../components/NavbarLogout'
import { SideNav } from '../../components/SideNav'

// type DashboardWithLayout = NextPage<ScriptProps> & {
//     getLayout: (page: ReactElement) => ReactNode;
// }

const Dashboard: NextPage = () => {
    return (
        <div className="DashboardNavWrapper">
            <SideNav />
            <div className="DasboardPage">
                <NavbarLogout />
            </div>
        </div>
    )
}

// Dashboard.getLayout = function(page: ReactElement) {
//     return <>
//     {page}
//     </>
// }

export default Dashboard