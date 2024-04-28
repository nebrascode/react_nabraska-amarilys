import Header from '../components/Header'
import HeaderForm from '../components/createProduct/headerForm'
import Form from '../components/createProduct/Form'
import Table from '../components/createProduct/table'

const CreateProduct = () => {

  return (
    <>
      <Header />
      <div className='pt-32'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12'>
            <div className='col-start-2 col-end-6 md:col-start-3 md:col-end-7 lg:col-start-4 lg:col-end-10'>
              <HeaderForm />
              <Form />
            </div>
          </div>
          <Table />
        </div>
      </div>
    </>
  )
}

export default CreateProduct;
