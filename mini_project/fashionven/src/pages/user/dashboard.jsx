import SideBar from "../../components/user/siderbar"
import Welcome from "../../components/user/welcome"
export default function Dashboard() {
    return (
        <div className="flex">
            <SideBar />
            <Welcome />
        </div>
    )
}