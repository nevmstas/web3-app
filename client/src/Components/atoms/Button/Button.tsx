interface Props {
    label: string
    onClick: () => void
}
const Button: React.FC<Props> = ({ label, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="flex flex-row jusify-content-center items-center my-5 bg-[#2052e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
            <p className="text-white text-base font-semibold">{label}</p>
            <div></div>
        </button>
    )
}

export default Button
