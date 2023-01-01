import React from 'react'

function Banner() {

    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
            <div>
                <h1 className="text-7xl">Media Monster's Blog</h1>
                <h2 className="mt-5 md:mt-0">Welcome to{" "}
                    <span className="underline decoration-4 decoration-[#F7AB0A]">all kinds of economic trends</span>
                    <span>{" "}blog in the digital sphere</span>
                </h2>
            </div>

            <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
                New stories | The latest in economy & technology | The weekly key words idioms & More!
            </p>
        </div>
    )
}

export default Banner
