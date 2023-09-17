import React from 'react';
import { FaCheck, FaTimes, FaAngleLeft, FaAngleRight, FaTrashAlt } from 'react-icons/fa';
import { marked } from 'marked';


import Api from '../api';

/*
import logo from './logo.svg';
<img src={logo} className="App-logo" alt="logo" />
*/


class Card extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			new: props.new,
			editMode: false,

			id: props.id,
			title: props.title,
			content: props.content,
			column: props.column,

			originalTitle: props.title,
			originalContent: props.content,

			emptyTitle: false,
			emptyContent: false,
		};
	}

	editMode() {
		this.setState({ editMode: true });

		if (this.state.new) {
			this.setState({
				title: '',
				content: '',
			})
		}
	}

	cancel() {
		this.setState({ editMode: false });

		this.setState({
			title: this.state.originalTitle,
			content: this.state.originalContent,
			emptyTitle: false,
			emptyContent: false,
		})
	}

	save() {
		let error = false;

		if (!this.state.title) {
			error = true;
			this.setState({ emptyTitle: true });
		} else {
			this.setState({ emptyTitle: false });
		}

		if (!this.state.content) {
			error = true;
			this.setState({ emptyContent: true });
		} else {
			this.setState({ emptyContent: false });
		}

		if (error) {
			return;
		}

		this.setState({ editMode: false });

		const api = new Api();

		if (this.state.new) {

			api.createCard({
				title: this.state.title,
				content: this.state.content,
			}).then(
				() => {
					this.setState({
						title: this.state.originalTitle,
						content: this.state.originalContent,
					})

					this.props.refresh();
				}
			).catch(
				(error) => {
					this.setState({ editMode: true });

					console.error(error)
				}
			);

		} else {

			api.updateCard({
				id: this.state.id,
				title: this.state.title,
				content: this.state.content,
				column: this.state.column,
			}).then(
				() => {
					this.props.refresh();
				}
			).catch(
				(error) => {
					this.setState({ editMode: true });

					console.error(error)
				}
			);

		}
	}

	canMoveBackward() {
		switch (this.state.column) {
			case 'TODO':
				return false;

			case 'DOING':
				return true;

			case 'DONE':
				return true;

			default:
				return false;
		}
	}

	moveBackward() {
		const api = new Api();

		let previousColumn = '';

		switch (this.state.column) {
			case 'DOING':
				previousColumn = 'TODO';
				break;

			case 'DONE':
				previousColumn = 'DOING';
				break;

			default:
				return false;
		}

		api.updateCard({
			id: this.state.id,
			title: this.state.title,
			content: this.state.content,
			column: previousColumn,
		}).then(
			() => {
				this.props.refresh();
			}
		).catch(
			(error) => {
				console.error(error)
			}
		);
	}

	canMoveForward() {
		switch (this.state.column) {
			case 'TODO':
				return true;

			case 'DOING':
				return true;

			case 'DONE':
				return false;

			default:
				return false;
		}
	}

	moveForward() {
		const api = new Api();

		let nextColumn = '';

		switch (this.state.column) {
			case 'TODO':
				nextColumn = 'DOING';
				break;

			case 'DOING':
				nextColumn = 'DONE';
				break;

			default:
				return false;
		}

		api.updateCard({
			id: this.state.id,
			title: this.state.title,
			content: this.state.content,
			column: nextColumn,
		}).then(
			() => {
				this.props.refresh();
			}
		).catch(
			(error) => {
				console.error(error)
			}
		);
	}

	delete() {
		const api = new Api();

		api.deleteCard({
			id: this.state.id,
		}).then(
			() => this.props.refresh()
		).catch(
			(error) => {
				console.error(error)
			}
		);
	}

	render() {
		if (this.state.editMode) {
			return (
				<div className="card">

					<input name="title"
						value={this.state.title}
						placeholder="title"
						className={this.state.emptyTitle ? 'error' : ''}
						onChange={e => this.setState({ title: e.target.value })} />

					<textarea name="content"
						value={this.state.content}
						placeholder="content"
						className={this.state.emptyContent ? 'error' : ''}
						onChange={e => this.setState({ content: e.target.value })} />

					<div className="buttons">
						<button className="cancel" onClick={() => this.cancel()}>
							<FaTimes title="cancel" />
						</button>
						<button className="save" onClick={() => this.save()}>
							<FaCheck title="save" />
						</button>
					</div>

				</div>
			);
		} else {

			return (
				<div className="card">
					<div onClick={() => this.editMode()}>
						<h3>{this.state.title}</h3>

						<article 
							dangerouslySetInnerHTML={{
								__html: marked.parse(this.state.content)
							}}
							/>
					</div>

					<div className="buttons">

						<button className="backward"
							onClick={() => this.moveBackward()}
							disabled={!this.canMoveBackward()}
							hidden={this.state.new}>

							<FaAngleLeft title="move backward" />

						</button>

						<button className="delete"
							onClick={() => this.delete()}
							hidden={this.state.new}>

							<FaTrashAlt title="delete" />

						</button>

						<button className="forward"
							onClick={() => this.moveForward()}
							disabled={!this.canMoveForward()}
							hidden={this.state.new}>

							<FaAngleRight title="move forward" />

						</button>

					</div>
				</div>
			);

		}
	}
}

export default Card;
