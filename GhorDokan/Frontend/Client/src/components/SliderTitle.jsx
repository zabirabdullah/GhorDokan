const SliderTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between px-4 sm:px-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">{title}</h2>
        <div className="mt-2 h-1 w-24 rounded-full bg-amber-600 sm:mt-2.5 sm:w-32" />
      </div>
    </div>
  );
}

export default SliderTitle;