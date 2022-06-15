import { ReactNode } from 'react'

interface IProps {
    children?: ReactNode
}

const CenteredTemplate = ({ children }: IProps) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 px-2">
            {children}
        </div>
    )
}

export default CenteredTemplate
