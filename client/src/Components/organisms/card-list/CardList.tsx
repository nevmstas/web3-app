interface ICardList {
    cards: React.ReactNode[]
}

const CardList: React.FC<ICardList> = ({ cards }) => {
    //TODO: develop pagination in smart contract
    const slicedCards = cards.length > 3 ? cards.slice(0, 3) : cards
    return <div className="flex space-x-10 mb-7">{slicedCards}</div>
}

export default CardList
