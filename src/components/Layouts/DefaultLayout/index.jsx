import Header from "../components/Header";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
    return (
        <div className=" ">
            <div className="shadow flex justify-center">
                <Header />
            </div>

            <div className="flex justify-center">
                <div className="w-[1150px]">
                    <Sidebar />
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;