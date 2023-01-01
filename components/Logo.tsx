import React from 'react'

function Logo(props: any) {
const {renderDefault, title} = props;
    return (
        <div className="flex items-center space-x-2">
            <img
                className="rounded-full object-cover"
                height={50}
                width={50}
                src="https://lh3.googleusercontent.com/a/AEdFTp6Wn-0UmSRgpMzK2O3eS5rpohOBm92xPr359r9Eyg=s288-p-rw-no"
                alt="logo" />
            <>{renderDefault(props)}</>
        </div>
    )
}

export default Logo