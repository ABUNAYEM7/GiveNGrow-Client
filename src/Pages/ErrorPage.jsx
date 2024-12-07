import { useNavigate } from 'react-router';

const ErrorPage = () => {
  const navigate = useNavigate()

  const handleRedirectHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200">
      <div className="bg-primary p-8 rounded-lg shadow-lg text-center w-full max-w-lg text-white">
        {/* Error Code/Message */}
        <div className="text-4xl font-bold  mb-4">
          404 - Page Not Found
        </div>
        <div className="text-lg mb-6">
          Sorry, the page you are looking for doesn't exist. Please go back to the home page.
        </div>
        
        {/* Redirect Button */}
        <button 
          onClick={handleRedirectHome}
          className="bg-secondary text-white btn border-none hover:text-secondary transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
