import { Outlet, useNavigate } from "react-router-dom"
import { HeaderComponentInternal } from "../../context/shared/Components/Header"
import { FooterComponent } from "../../context/shared/Components/Footer"
import './layoutbase.scss';

export const LayoutBase = () => {
    const navigate = useNavigate();
    const stylesByPage = [
        "/form-prediction",
        "/prediction/list",
        "/profile",
        "/blog",
        "/prediction/compare-vehicle"
    ]

    return (
        <div className="LayoutBase">
            <HeaderComponentInternal redirectPage={(uri) => navigate(uri)}/>
            <main className="ContentBase" style={stylesByPage.find(row => window.location.pathname.search(row) >= 0) ? { background: 'white' } : {}}>
                <div className="containerBase">
                    <Outlet />
                </div>
            </main>
            <FooterComponent />
        </div>
    )
}