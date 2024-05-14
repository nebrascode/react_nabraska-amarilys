import { useNavigate } from "react-router-dom";


const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content text-center shadow-gray shadow-lg rounded-md p-6">
        <img src="https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information-concept-illustration_335657-1661.jpg?w=1380&t=st=1714969317~exp=1714969917~hmac=0964004140bf079c7ff451242b230caf7243a49b61bd990aca21681d2c8f8121"
          alt="image"
          className="h-60" />
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-secondary">Welcome, Admin!</h1>
          <p className="mt-3 text-md leading-8 text-gray-600">Boost Your Productivity. Start Using our app today</p>
          <button className="btn btn-primary mt-4 text-white" onClick={() => navigate('/data-barang')}>Lihat data</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome;