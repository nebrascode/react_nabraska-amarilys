import { useState } from "react";
import { supabase } from "../../lib/helper/supabaseClient";
import { useNavigate } from "react-router-dom";

const FormDataBrg = () => {
    const navigate = useNavigate();

    const [ nama_brg, setNama_brg ] = useState("");
    const [ hrg_beli, setHrg_beli ] = useState("");
    const [ hrg_jual, setHrg_jual ] = useState("");
    const [ stok, setStok ] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(nama_brg, hrg_beli, hrg_jual, stok);

        const { data, error } = await supabase
            .from("barang")
            .insert([ { nama_brg, hrg_beli, hrg_jual, stok } ])

        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data);
            // Mengarahkan ke halaman "Data Barang"
        }
        navigate('/data-barang');
    }

    return (
        <div className="max-w-lg mx-auto mt-16">
            <p className="text-2xl font-bold text-center text-primary mb-5 underline">Form Data Barang</p>
            <form onSubmit={handleSubmit} className="shadow-lg p-8 rounded-md">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="email" className="block text-sm leading-6 font-medium text-gray-900">
                            Nama Barang
                        </label>
                        <div className="mt-2">
                            <input
                                id="nama"
                                name="nama"
                                type="name"
                                autoComplete="nama"
                                onChange={(e) => setNama_brg(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="hrgBeli" className="block text-sm font-medium leading-6 text-gray-900">
                            Harga Beli
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="hrgBeli"
                                id="hrgBeli"
                                autoComplete="hrgBeli"
                                onChange={(e) => setHrg_beli(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="hrgJual" className="block text-sm font-medium leading-6 text-gray-900">
                            Harga Jual
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="hrgJual"
                                id="hrgJual"
                                autoComplete="family-name"
                                onChange={(e) => setHrg_jual(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                            stok
                        </label>
                        <div className="mt-2">
                            <input
                                type="number"
                                name="stok"
                                id="stok"
                                autoComplete="stok"
                                onChange={(e) => setStok(e.target.value)}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary text-white mt-5" type="submit" onClick={handleSubmit}>Save</button>
            </form>
        </div>
    )
}

export default FormDataBrg;