import {Link} from 'react-router-dom';
const SliderTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-amber-600 sm:mt-2.5 sm:w-32" />
      </div>
      <Link
        to="/products"
        className="group flex items-center gap-1 text-sm font-bold text-amber-600 transition-all hover:text-amber-700 sm:text-base"
      >
        View All Products 
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </Link>
    </div>
  );
}

export default SliderTitle;