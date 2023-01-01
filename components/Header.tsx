import Image from "next/image"
import Link from "next/link"

function Header() {

    return (
        <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
            <div className="flex items-center space-x-2">
                <Link href="/">
                    <Image
                    className="rounded-full"
                    src="https://cdn.sanity.io/images/99od6rmq/production/1ee44ba19a7cae37beae85dfba9efe423dc5eb5a-256x256.jpg"
                    width={50}
                    height={50}
                    alt="logo"
                    />
                </Link>
                <h1>The Medi Mon</h1>
            </div>
            <div>
<Link href="/"
className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#F7AB0A] flex items-center rounded-full text-center"
>
    Sign up to the University of Code
</Link>
            </div>
        </header>

    )
}

export default Header