import { FC, useState } from "react";
import { CardType } from "../App";
import CardItem from "./CardItem";

type CardListProps = {
    cards: CardType[],
}

const CardList: FC<CardListProps> = function({ cards }) {
	const [selectedId, setSelectedId] = useState<null | number>(null);

	const handleClick = (id: number) => {        
		setSelectedId(id !== selectedId ? id : null);
	};
    
	return (
		<div className="flashcards">
			{
				cards.map(
					card => (
						<CardItem 
							key={card.id}
							card={card}
							selectedId={selectedId}
							handleClick={handleClick}
						/>
					)
				)
			}
		</div>
	);
};

export default CardList;