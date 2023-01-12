import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error?: string | boolean
}

const Input: React.FC<Props> = ({ label, error, ...props }) => {
    return (
        <div className="my-1 flex flex-col font-semibold">
            <label className="text-white my-1" htmlFor={props.name}>
                {label}
            </label>
            <input className="rounded-md p-1" {...props} />
            <div className="h-3">
                {error && <p className="text-red-300">{error}</p>}
            </div>
        </div>
    )
}

export default Input
