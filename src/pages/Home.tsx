import { Link } from 'react-router';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-gray-800 w-full text-center">
      <h2 className="text-2xl md:text-3xl font-bold break-words">
        Plan Your Perfect Trip
      </h2>
      <p className="text-sm md:text-lg mt-4 max-w-lg break-words">
        Create your personalized travel checklist and never forget your
        essentials again.
      </p>

      <Link to="/packing-list">
        <Button className="mt-8" ariaLabel="Get Started">
          Get Started
        </Button>
      </Link>
    </div>
  );
};

export default Home;
