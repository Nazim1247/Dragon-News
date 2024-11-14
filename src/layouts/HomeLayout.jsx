import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/LayoutComponent/LeftNavbar";
import RightNavbar from "../components/LayoutComponent/RightNavbar";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div className="max-w-[1280px] mx-auto font-poppins">
            {/* Header */}
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <LatestNews></LatestNews>
                </section>
            </header>
            {/* Navbar */}
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            {/* Main */}
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">
                    <Outlet></Outlet>
                </section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;