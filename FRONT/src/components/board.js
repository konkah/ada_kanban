import React from 'react';

import Api from '../api';
import Column from './column';


class Board extends React.Component {

	constructor(props) {
		super(props);

		this.state = { columns: [] };

		this.updateCards = this.updateCards.bind(this);
	}

	componentDidMount() {
		this.updateCards();
	}

	updateCards() {
		const api = new Api();

		api.getCards()
			.then(
				(cards) => {
					this.setColumnsByCards(cards)
				}
			)
			.catch(
				(error) => console.error(error)
			);
	}

	setColumnsByCards(cards) {
		const columns = this.createColumns();

		for(let c = 0; c < cards.length; c++) {
			const card = cards[c];

			const column = columns.find(
				column => column.title === card.column
			);
			column.cards.push(card);
		}

		this.setState({ columns: [] }, () => {
			this.setState({ columns: columns });
		});
	}

	createColumns() {
		const newCard = {
			id: '01234567-89ab-cdef-0123-456789abcdef',
			title: 'New card',
			content: 'Click here to create a new card',
			new: true,
		}

		return [
			{ title: 'NEW', cards: [newCard] },
			{ title: 'TODO', cards: [] },
			{ title: 'DOING', cards: [] },
			{ title: 'DONE', cards: [] },
		];
	}

	render() {
		return (
			<div className="board">
				
				<h1>{this.props.title}</h1>
				
				<div className="columns">
					{
						this.state.columns.map(
							column => (
								<Column
									key={column.title}
									title={column.title}
									cards={column.cards}
									refresh={this.updateCards}
									/>
							)
						)
					}
				</div>

			</div>
		);
	}
}

export default Board;
