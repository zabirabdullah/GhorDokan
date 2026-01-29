const SliderTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-between  px-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900">{title}</h2>
          <div className="mt-2.5 h-1 w-32 rounded-full bg-amber-600" />
        </div>
      </div>
  );
}

export default SliderTitle;