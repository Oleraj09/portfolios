const LoginPage = () => {
    return (
        <>
            <div className="flex min-h-[73.5vh] flex-col justify-center px-6 py-12 lg:px-8">
                <div className="container auto-center flex justify-center items-center flex-col">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm pb-5">
                        <h1 className="text-center text-[40px] font-bold tracking-tight text-gray-900 leading-none">Admin Panel</h1>
                        <h2 className="text-center text-[20px] font-bold tracking-tight text-gray-900 leading-none">Sign in to your account</h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label for="email" className="block text-sm/6 font-medium text-gray-900">Email</label>
                                <div className="mt-2">
                                    <input type="email" name="email" id="email" autocomplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"  placeholder="Enter your email."/>
                                </div>
                            </div>
 
                            <div>
                                <div className="flex items-center justify-between">
                                    <label for="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input type="password" name="password" id="password" autocomplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6" placeholder="Enter your password."/>
                                </div>
                            </div>

                            <div className="pt-5">
                                <button type="submit" className="flex w-full justify-center rounded-md bg-[#444] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-[#222] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-change">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginPage;