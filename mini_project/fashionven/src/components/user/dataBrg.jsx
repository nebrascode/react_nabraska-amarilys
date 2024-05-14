import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../lib/helper/supabaseClient"

const DataBarang = () => {
    const navigate = useNavigate();
    const [ barangs, setBarangs ] = useState([]);

    useEffect(() => {
        fetchBarang();
    }, []);

    async function fetchBarang() {
        try {
            const { data } = await supabase
                .from("barang")
                .select("*");
            setBarangs(data);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleDelete = async (id) => {
        console.log("Attempting to delete item with ID:", id);
        try {
            const { data, error } = await supabase
                .from("barang")
                .delete()
                .eq('id', id);

            if (error) {
                console.error("Error deleting item:", error.message);
                alert(`Error deleting item: ${error.message}`);
                return;
            }

            console.log("Deleted item:", data);
            alert('Data berhasil dihapus');
            window.location.reload();
        } catch (error) {
            console.error("Terjadi kesalahan:", error);
            alert("Terjadi kesalahan: " + error.message);
        }
    }

    return (
        <div className="px-16 mt-8 my-auto">
            <p className="text-2xl font-bold">Data Barang</p>
            <hr />
            <button className="btn btn-primary text-white mb-3 mt-5" onClick={() => navigate('/form-barang')}>Tambah barang</button>
            <div className="overflow-x-auto border border-slate-100 shadow-xl rounded-2xl">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th className="text-primary">ID</th>
                            <th className="text-primary">Nama Barang</th>
                            <th className="text-primary">Harga Jual</th>
                            <th className="text-primary">Harga Beli</th>
                            <th className="text-primary">Stok</th>
                            <th className="text-primary"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            barangs.map((barang) => (
                                <tr key={barang.id}>
                                    <td>{barang.id}</td>
                                    <td>{barang.nama_brg}</td>
                                    <td>{barang.hrg_jual}</td>
                                    <td>{barang.hrg_beli}</td>
                                    <td>{barang.stok}</td>
                                    <td>
                                        <span className="text-bold flex gap-3 text-2xl">
                                            <Link to={"/data-barang/" + barang.id}><i className="fi fi-tr-pen-square text-primary" /></Link>
                                            <a onClick={() => handleDelete(barang.id)} className="hover:cursor-pointer"><i className="fi fi-sr-octagon-xmark text-red-600"></i></a>
                                        </span>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default DataBarang;
