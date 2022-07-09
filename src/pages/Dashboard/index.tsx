import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { NavbarLogout } from '../../components/NavbarLogout'
import { SideNav } from '../../components/SideNav'

// type DashboardWithLayout = NextPage<ScriptProps> & {
//     getLayout: (page: ReactElement) => ReactNode;
// }

const Dashboard = () => {
    return (
        <>
        <NavbarLogout />
        
        <div className="DashboardNavWrapper" id="DashboardNavWrapper">
        <SideNav />
            <div className="DasboardPage">
            
            </div>
        </div>
        </>
    )
}

export default Dashboard

export const getServerSideProps = withPageAuthRequired();