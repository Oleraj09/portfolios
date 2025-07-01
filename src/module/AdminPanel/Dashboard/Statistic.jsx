const Statistic = ({ title }) => {
    return (
        <>
            <hr />
            <div className="flex justify-between">
                <p className="text-[20px]">{title}</p>
            </div>
            <hr />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Total Posts</h3>
                    <p class="text-4xl font-bold text-indigo-600">152</p>
                    <p class="text-sm text-gray-500 mt-1">Published articles</p>
                </div>

                <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Total Portfolio</h3>
                    <p class="text-4xl font-bold text-emerald-600">18</p>
                    <p class="text-sm text-gray-500 mt-1">Projects showcased</p>
                </div>

                <div class="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">Total Projects</h3>
                    <p class="text-4xl font-bold text-pink-600">34</p>
                    <p class="text-sm text-gray-500 mt-1">Completed tasks</p>
                </div>

            </div>

        </>
    )
}
export default Statistic;