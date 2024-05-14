import SideBar from "../../components/user/siderbar"
import BrgKeluar from "../../components/user/brg_keluar"
export default function Dashboard() {
    return (
        <div className="flex">
            <SideBar />
            <BrgKeluar />
        </div>
    )
}