const Setting = ({ title }) => {
    return (
        <>
            <hr />
            <div className="flex justify-between">
                <p className="text-[20px]">{title}</p>
            </div>
            <hr />
            <div className="setting-form">
                <form class="space-y-6 py-5">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-md font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                class="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label for="email" class="block text-md font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="you@example.com"
                                class="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
                                required
                            />
                        </div>
                        <div>
                            <label for="phone" class="block text-md font-medium text-gray-700 mb-1">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+1 234 567 8900"
                                class="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
                            />
                        </div>
                        <div>
                            <label for="hireme" class="block text-md font-medium text-gray-700 mb-1">Hire Me Link</label>
                            <input
                                type="url"
                                id="hireme"
                                name="hireme"
                                placeholder="https://yourportfolio.com/hire-me"
                                class="w-full border border-gray-300 rounded-md p-3 focus:outline-none"
                            />
                        </div>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-5">
                        <div>
                            <label for="heroImage" class="block text-md font-medium text-gray-700 mb-1">Hero Image</label>

                            <label
                                for="heroImage"
                                id="heroLabel"
                                class="flex items-center justify-center px-4 py-2 bg-[#444] text-white rounded-lg cursor-pointer cursor-change transition"
                            >
                                Choose a file
                            </label>

                            <input
                                type="file"
                                id="heroImage"
                                name="heroImage"
                                accept="image/*"
                                class="hidden"
                                onChange={(e) => {
                                    document.getElementById('heroLabel').textContent = e.target.files[0]?.name || 'Choose a file';
                                }}
                            />
                        </div>

                        <div>
                            <label for="headshotImage" class="block text-md font-medium text-gray-700 mb-1">Headshot Image</label>

                            <label
                                for="headshotImage"
                                id="headshotLabel"
                                class="flex items-center justify-center px-4 py-2 bg-[#444] text-white rounded-lg cursor-pointer cursor-change transition"
                            >
                                Choose a file
                            </label>

                            <input
                                type="file"
                                id="headshotImage"
                                name="headshotImage"
                                accept="image/*"
                                class="hidden"
                                onChange={(e) => {
                                    document.getElementById('headshotLabel').textContent = e.target.files[0]?.name || 'Choose a file';
                                }}
                            />
                        </div>

                        <div>
                            <label for="aboutImage" class="block text-md font-medium text-gray-700 mb-1">
                                About Image
                            </label>

                            <label
                                for="aboutImage"
                                id="aboutLabel"
                                class="flex items-center justify-center px-4 py-2 bg-[#444] text-white rounded-lg cursor-pointer cursor-change transition"
                            >
                                Choose a file
                            </label>

                            <input
                                type="file"
                                id="aboutImage"
                                name="aboutImage"
                                accept="image/*"
                                class="hidden"
                                onChange={(e) => {
                                    document.getElementById('aboutLabel').textContent = e.target.files[0]?.name || 'Choose a file';
                                }}
                            />
                        </div>
                    </div>
                    <div class="text-left">
                        <button
                            type="submit"
                            class="bg-[#444] w-[100%] sm:w-[full] uppercase text-white font-semibold px-16 py-3 rounded-full hover:bg-[#222] transition cursor-change"
                        >
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </>
    )
}
export default Setting;