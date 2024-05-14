import SideBar from "../../components/user/siderbar"
import BrgMasuk from "../../components/user/brg_masuk"
export default function Dashboard() {
    return (
        <div className="flex">
            <SideBar />
            <BrgMasuk />
        </div>
    )
}