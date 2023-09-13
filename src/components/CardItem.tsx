import { FC } from "react";
import { CardType } from "../App";

type CardItemProps = {
    card: CardType,
    selectedId: number | null,
    handleClick: (id: number) => void,
}

const CardItem: FC<CardItemProps> = function(props) {
	const {
		card,
		selectedId,
		handleClick,
	} = props;

	const {
		id,
		question,
		answer,
	} = card;

	const selectedClassName = id === selectedId  ? "selected" : "";

	const isSelect = selectedId === id ? id : null;

	return (
		<div 
			className={selectedClassName}
			onClick={() => handleClick(id)}
		>
			{
				!isSelect && (
					<>
						<h2>card #{id}</h2>
						<p>{question}</p>
					</>
				)
			}
			{
				isSelect && <p>{answer}</p>
			}
		</div>
	);
};

export default CardItem;