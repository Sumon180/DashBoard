import {ClockLoader} from "react-spinners";
export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-100 w-full" style={{height: 100 + 'vh', backgroundColor: "white"}}>
            <ClockLoader color="#36d7b7" />
        </div>
    );
}
