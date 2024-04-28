import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, editProduct, selectProducts } from "../../store/productSlice";
import { API_BASE_URL, PRODUCTS_ENDPOINT } from '../../API/api';


export default function Table(){
    const dispatch = useDispatch();
    const products = useSelector(selectProducts);
    const [data, setdata]= useState([{}]);

    useEffect(() => {
        axios.get(`${API_BASE_URL}${PRODUCTS_ENDPOINT}`)
        .then(response => {
            setdata(response.data);
          })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
    }, []);

    const [selectedProductId, setSelectedProductId] = useState(null);

    const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);

    const [isEditModalVisible, setEditModalVisible] = useState(false);
    const [editedProduct, setEditedProduct] = useState({
        productName: '',
        productCategory: '',
        productFreshness: '',
        productDescription: '',
        productPrice: '',
        productImage: '',
    });

    const showEditModal = (productId) => {
        setSelectedProductId(productId);
        setEditModalVisible(true);
        const selectedProduct = products.find((product) => product.id === productId);
        setEditedProduct(selectedProduct);
    };

    const saveChanges = () => {
        dispatch(editProduct({ id: selectedProductId, updatedProduct: editedProduct }));
        setEditModalVisible(false);
        setSelectedProductId(null);
        setEditedProduct({
            productName: '',
            productCategory: '',
            productFreshness: '',
            productDescription: '',
            productPrice: '',
            productImage: '',
        });
    };

    const cancelEditModal = () => {
        setEditModalVisible(false);
        setSelectedProductId(null);
    };

    const showDeleteModal = (productId) => {
        setSelectedProductId(productId);
        setDeleteModalVisible(true);
    };

    const confirmDeletion = () => {
        dispatch(deleteProduct({ id: selectedProductId }));
        setDeleteModalVisible(false);
        setSelectedProductId(null);
    };

    const cancelDeleteModal = () => {
        setDeleteModalVisible(false);
        setSelectedProductId(null);
    };

    return (
        <>
            <div className="my-8 w-full md:w-4/5 mx-auto">
                <h2 className="text-2xl font-medium leading-7 text-center">
                    List Product
                </h2>
                <input
                    type="text"
                    className="mt-6 block w-[90%] md:w-full mx-auto p-2 pl-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    id="input-search"
                    placeholder="Search by Username"
                />
                <div className="w-[90%] md:w-full mx-auto flex justify-end mt-4">
                    <button
                        id="btn-search"
                        type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Search
                    </button>
                </div>
                <div className="mt-4 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-white uppercase bg-[#0D6EFD]">
                            <tr >
                                <th scope="col" className="px-6 py-3">
                                    No.
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Category
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image of Product
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Freshness
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Additional Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Product Prices
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody id="table-product">
                            {data.map((product) => (
                                <tr key={product.id}>
                                    <td className="px-6 py-4">
                                        <Link to={`/products-details/${product.id}`}>{product.id}</Link>
                                    </td>
                                    <td className="px-6 py-4">{product.productName}</td>
                                    <td className="px-6 py-4">{product.productCategory}</td>
                                    <td className="px-6 py-4">
                                        <img
                                            src={product.productImage}
                                            alt='Product'
                                            className='w-10 h-auto'
                                        />
                                    </td>
                                    <td className="px-6 py-4">{product.productFreshness}</td>
                                    <td className="px-6 py-4">{product.productDescription}</td>
                                    <td className="px-6 py-4">{product.productPrice}</td>
                                    <td className="px-8 py-4 flex items-center gap-4">
                                        <button type="" onClick={() => showDeleteModal(product.id)} className='px-2 py-1 bg-red-500 text-white rounded'>Delete</button>
                                        <button type="" onClick={() => showEditModal(product.id)} className='px-2 py-1 bg-green-500 text-white rounded'>Edit</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    
                    {/* Modal for Delete Product */}
                    {isDeleteModalVisible && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="fixed inset-0 bg-black opacity-30"></div>
                            <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                                <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                                <p className="text-gray-700 mb-4">
                                    Are you sure you want to delete this product?
                                </p>
                                <div className="flex justify-end">
                                    <button onClick={confirmDeletion} className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mr-2">Yes</button>
                                    <button onClick={cancelDeleteModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">No</button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Modal for Edit Product */}
                    {isEditModalVisible && (
                        <div className="fixed inset-0 flex items-center justify-center z-50">
                            <div className="fixed inset-0 bg-black opacity-30"></div>
                            <div className="relative z-10 bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                                <h2 className="text-xl font-semibold mb-4">Edit Product</h2>

                                {/* Product Name */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product-name"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Product Name
                                    </label>
                                    <input
                                        type="text"
                                        value={editedProduct.productName}
                                        onChange={(e) => setEditedProduct({ ...editedProduct, productName: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                                    />
                                </div>

                                {/* Category */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product-category"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Product Category
                                    </label>
                                    <select
                                        value={editProduct.productCategory}
                                        onChange={(e) => setEditedProduct({ ...editedProduct, productCategory: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                                    >
                                        <option selected>Choose</option>
                                        <option value="Shirt">Shirt</option>
                                        <option value="Jacket">Jacket</option>
                                    </select>
                                </div>

                                {/* Product Image */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product-image"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Product Image
                                    </label>
                                    <input
                                        type="file"
                                        onChange={(e) => setEditedProduct({ ...editedProduct, productImage: e.current.value })}
                                        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                                    />
                                </div>

                                {/* Product Freshness */}
                                <div className="mb-4">
                                    <label
                                        htmlFor="product-freshness"
                                        className="block mb-2 text-sm font-medium text-gray-900"
                                    >
                                        Product Freshness
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            value="Brand New"
                                            onChange={(e) => setEditedProduct({ ...editedProduct, productFreshness: e.target.value })}
                                            checked={editedProduct.productFreshness === "Brand New"}
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
                                            type="radio"
                                            value="Second Hank"
                                            onChange={(e) => setEditedProduct({ ...editedProduct, productFreshness: e.target.value })}
                                            checked={editedProduct.productFreshness === "Second Hank"}
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
                                            type="radio"
                                            value="Refurbished"
                                            onChange={(e) => setEditedProduct({ ...editedProduct, productFreshness: e.target.value })}
                                            checked={editedProduct.productFreshness === "Refurbished"}
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
                                        Product Description
                                    </label>
                                    <textarea
                                        value={editProduct.productDescription}
                                        onChange={(e) => setEditedProduct({ ...editedProduct, productDescription: e.target.value })}
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
                                        type="number"
                                        value={editedProduct.productPrice}
                                        onChange={(e) => setEditedProduct({ ...editedProduct, productPrice: e.target.value })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0D6EFD] focus:border-[#0D6EFD] block w-full p-2.5"
                                    />
                                </div>



                                <div className="flex justify-end">
                                    <button onClick={saveChanges} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 mr-2">Save</button>
                                    <button onClick={cancelEditModal} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
