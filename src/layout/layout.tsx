import { Outlet } from 'react-router-dom';
import { Sidebar } from "../components/sidebar/sidebar.tsx";

function Layout() {
    return (
        <div className="grid">
            <div className="header-grid"></div>
            <div className="sidebar-grid">
                <Sidebar/>
            </div>

            <div className="content-outlet">
                <Outlet/>
            </div>
            <div className="footer-grid"> footer</div>
        </div>
    );
}

export default Layout;