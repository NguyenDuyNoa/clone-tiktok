import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccountItem = () => {
    return (
        <div className=" flex items-center py-[9px] px-4 cursor-pointer hover:bg-hover">
            <img className=" w-10 mr-3 rounded-full object-cover" src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&x-expires=1711260000&x-signature=0qJLIMOKDqW2wF%2BwpC5vI2djjUo%3D" alt="" />
            <div className=" flex-1">
                <h4 className=" flex items-center">
                    <span className=" text-base">Nguyen Van A</span>
                    <FontAwesomeIcon className=" text-xs ml-1 text-cyan-400" icon={faCircleCheck} />
                </h4>
                <span className=" text-sm">nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;