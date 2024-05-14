import { useEffect, useState } from "react";
import { supabase } from "../../lib/helper/supabaseClient";

const BrgMasuk = () => {
    const [ transMasuk, setTransMasuk ] = useState([]);

    useEffect(() => {
        fetchTransMasuk();
    }, []);

    async function fetchTransMasuk() {
        try {
            const { data } = await supabase
                .from("brg_masuk")
                .select("*");
            setTransMasuk(data);
        } catch (error) {
            alert(error.message);
        }
    }

    return (
        <>
            <div className="mx-auto w-full p-6">
                <p className="text-3xl text-primary">Transaksi Barang Masuk</p>

                <div className="mt-6 shadow-sm">
                    <table className="table border">
                        <thead>
                            <tr>
                                <th className="text-primary">ID</th>
                                <th className="text-primary">Tanggal</th>
                                <th className="text-primary">jumlahl</th>
                                <th className="text-primary">id barang</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transMasuk.map((trans) => (
                                    <tr key={trans.id}>
                                        <td>{trans.id}</td>
                                        <td>{trans.tgl_masuk}</td>
                                        <td>{trans.jumlah}</td>
                                        <td>{trans.id_brg}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}

export default BrgMasuk;