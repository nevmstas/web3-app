const SliderButton = ({
    direction = 'next',
    onClick,
}: {
    direction?: 'next' | 'prev'
    onClick: () => void
}) => {
    return (
        <button
            className="w-10 h-10 flex justify-center items-center rounded-full bg-pink-400 hover:bg-pink-300 text-white"
            onClick={onClick}
        >
            {direction === 'prev' ? '<-' : '->'}
        </button>
    )
}

export default SliderButton
