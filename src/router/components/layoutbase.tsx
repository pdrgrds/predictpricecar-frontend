import { Outlet, useNavigate } from "react-router-dom"
import { HeaderComponentInternal } from "../../context/shared/Components/Header"
import { FooterComponent } from "../../context/shared/Components/Footer"
import './layoutbase.scss';

export const LayoutBase = () => {
    const navigate = useNavigate();

    return (
        <div className="LayoutBase">
            <HeaderComponentInternal redirectPage={(uri) => navigate(uri)}/>
            <main className="ContentBase">
                <div className="containerBase">
                    <Outlet />
                </div>
            </main>
            <FooterComponent />
        </div>
    )
}