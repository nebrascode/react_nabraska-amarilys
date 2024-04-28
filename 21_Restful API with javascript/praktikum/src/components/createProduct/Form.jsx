import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/productSlice";

export default function FormProduct(){
    const dispatch = useDispatch();

    const emptyData={
        productName: "",
        productCategory: "",
        productFreshness: "",
        productDescription: "",
        productPrice: "",
        productImage: "",
    };

    const regexSymbol = /[`~!@#$%^&*(){}|:;'"/.<_,>?]/;
    let nextId = 1;

    const [data, setData] = useState(emptyData);
    const [errorProductName, setErrorProductName] = useState("");
    const inputImage = useRef();

    //validasi form tidak boleh kosong
    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            data.productName.trim() === "" ||
            data.productCategory === "" ||
            data.productFreshness === "" ||
            data.productDescription.trim() === "" ||
            data.productPrice.trim() === "" ||
            data.productImage === ""
        ) {
            alert("Form fields must be filled!");
            return false;
        } else {
            alert("Form submitted!");
            dispatch(
                addProduct({
                    id: nextId+1,
                    ...data,
                })
            );
            setData(emptyData);
            inputImage.current.value = null;
        }
    };

    const handleInput = (e) => {
        const targetName = e.target.name;
        const value = e.target.type === "file" ? URL.createObjectURL(e.target.files[0]) : e.target.value;

        if (targetName === "productName") {
            if (regexSymbol.test(value)) {
                setErrorProductName("Product name must not contains symbols");
            } else if (value.length > 25) {
                setErrorProductName("Product name must not exceed 25 characters");
            } else if (value.length === 0) {
                setErrorProductName("Product name must be filled");
            } else {
                setErrorProductName("");
            }
        }

        setData({
            ...data,
            [targetName]: value,
        });
    };

    return(
        <>
        <div className="mt-2 md:mt-6">
                <h2 className="text-2xl font-medium leading-7">Detail Product</h2>
                {/* form */}
                <form className="mt-4 md:mt-6" noValidate onSubmit={handleSubmit}>
                    {/* Product Name */}
                    <div className="mb-4">
                        <label
                            htmlFor="product-name"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Product Name
                        </label>
                        <input
                            value={data.productName}
                            onChange={handleInput}
                            id="product-name"
                            type="text"
                            name="productName"
                            className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 ${errorProductName ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        <p className="text-red-500 text-sm mt-1">{errorProductName}</p>
                    </div>

                    {/* Product Category */}
                    <div className="mb-4">
                        <label
                            htmlFor="product-category"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Product Category
                        </label>
                        <select
                            value={data.productCategory}
                            onChange={handleInput}
                            id="product-category"
                            name="productCategory"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                        >
                            <option selected>Choose</option>
                            <option value="shirt">Shirt</option>
                            <option value="jacket">Jacket</option>
                        </select>
                    </div>

                    {/* Product Image */}
                    <div className="mb-4">
                        <label
                            htmlFor="product-image"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Image of Product
                        </label>
                        <input
                            onChange={handleInput}
                            id="product-image"
                            type="file"
                            name="productImage"
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                        />
                    </div>

                    {/* Product Freshness */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Product Freshness
                        </label>
                        <div className="flex items-center">
                            <input
                                value="Brand New"
                                checked={data.productFreshness === "Brand New"}
                                onChange={handleInput}
                                type="radio"
                                name="productFreshness"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]"
                            />
                            <label
                                htmlFor="brand-new"
                                className="ml-2 text-sm font-medium text-gray-900"
                            >
                                Brand New
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                value="Second Hank"
                                checked={data.productFreshness === "Second Hank"}
                                onChange={handleInput}
                                type="radio"
                                name="productFreshness"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]"
                            />
                            <label
                                htmlFor="second-hank"
                                className="ml-2 text-sm font-medium text-gray-900"
                            >
                                Second Hank
                            </label>
                        </div>
                        <div className="flex items-center">
                            <input
                                value="Refurbished"
                                checked={data.productFreshness === "Refurbished"}
                                onChange={handleInput}
                                type="radio"
                                name="productFreshness"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-[#0D6EFD]"
                            />
                            <label
                                htmlFor="refurbished"
                                className="ml-2 text-sm font-medium text-gray-900"
                            >
                                Refurbished
                            </label>
                        </div>
                    </div>

                    {/* Product Description */}
                    <div className="mb-4">
                        <label
                            htmlFor="product-description"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Additional Description
                        </label>
                        <textarea
                            value={data.productDescription}
                            onChange={handleInput}
                            id="product-description"
                            name="productDescription"
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#0D6EFD] focus:border-[#0D6EFD]"
                        ></textarea>
                    </div>

                    {/* Product Price */}
                    <div className="mb-4">
                        <label
                            htmlFor="product-price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                        >
                            Product Price
                        </label>
                        <input
                            name='productPrice'
                            value={data.productPrice}
                            onChange={handleInput}
                            id="product-price"
                            type="number"
                            placeholder="$ 100"
                            min="1"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                        />
                    </div>

                    {/* Button Submit */}
                    <div className="mb-4">
                        <button
                            id="btn-submit"
                            type="submit"
                            className="w-full text-white bg-[#0D6EFD] hover:bg-blue-800 focus:ring-4 focus:ring-[#0D6EFD] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </>
    )

}