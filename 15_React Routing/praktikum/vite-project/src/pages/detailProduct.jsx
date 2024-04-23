import { useParams } from 'react-router-dom'

const DetailProducts = () => {
    const { id } = useParams();
  const storedData = JSON.parse(localStorage.getItem('products')) || [];
  const selectedItem = storedData.find((item) => item.id === parseInt(id));

  if (!selectedItem) {
    return <div>Data not found</div>;
  }


  return (
    <section className='py-20'>
        <div className='container text-center'>
            <h2 className='text-3xl font-bold text-[#091B2F]'>Product Details</h2>
            <div className='mt-8 p-6 bg-[#091B2F] rounded-xl text-white max-w-lg mx-auto'>
                <p className='font-semibold text-xl'>ID : {selectedItem.id}</p>
                <p className='mt-2 font-semibold text-xl'>Name : {selectedItem.name}</p>
                <p className='mt-2 font-semibold text-xl'>Category : {selectedItem.category}</p>
                {/* <p className='mt-2 font-semibold text-xl'>Image : {selectedItem.image}</p> */}
                <p className='mt-2 font-semibold text-xl'>Freshness : {selectedItem.freshness}</p>
                <p className='mt-2 font-semibold text-xl'>Description : {selectedItem.description}</p>
                <p className='mt-2 font-semibold text-xl'>Price : {selectedItem.price}</p>
            </div>
        </div>
    </section>
  )
}

export default DetailProducts