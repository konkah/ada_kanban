import React from 'react';
import Card from './card'


class Column extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cards: props.cards
		};
	}

	render() {
		return (
			<div className="column">
				<h2>{this.props.title}</h2>

				<div className='cards'>
					{
						this.state.cards.map(
							card => (
								<Card
									key={card.id}
									id={card.id}
									new={card.new}
									title={card.title}
									content={card.content}
									column={card.column}
									refresh={this.props.refresh}
								/>
							)
						)
					}
				</div>
			</div>
		);
	}
}

export default Column;
