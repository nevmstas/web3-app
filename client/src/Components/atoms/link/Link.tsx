interface ILink {
    children?: React.ReactNode
    onClick?: () => void
}

const Link = ({ children, onClick }: ILink) => {
    return (
        <a
            className="underline text-white uppercase self-center cursor-pointer"
            onClick={onClick}
        >
            {children}
        </a>
    )
}

export default Link
