import axios from 'axios';
import { sanitize } from 'dompurify';


class Api {
	token = ''

	async login() {
		const response = await axios.post(
			'http://127.0.0.1:5000/login',
			{
				username: process.env.REACT_APP_API_USERNAME,
				password: process.env.REACT_APP_API_PASSWORD,
			}
		)

		this.token = response.data.token

		setTimeout(() => {
			this.token = null;
		}, 10 * 60 * 1000)
	}

	async getCards() {
		if (!this.token) {
			await this.login();
		}

		const response = await axios.get(
			'http://127.0.0.1:5000/cards',
			{
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			}
		);

		const cards = response.data.sort(
			(card1, card2) => card1.createdAt < card2.createdAt
		);

		return cards;
	}

	async createCard(card) {
		if (!this.token) {
			await this.login();
		}

		const response = await axios.post(
			'http://127.0.0.1:5000/cards',
			{
				title: card.title,
				content: sanitize(card.content, { USE_PROFILES: { html: true } }),
				column: 'TODO',
			},
			{
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			}
		)

		return response.data
	}

	async updateCard(card) {
		if (!this.token) {
			await this.login();
		}

		const response = await axios.put(
			`http://127.0.0.1:5000/cards/${card.id}`,
			{
				id: card.id,
				title: card.title,
				content: sanitize(card.content, { USE_PROFILES: { html: true } }),
				column: card.column,
			},
			{
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			}
		)

		return response.data
	}

	async deleteCard(card) {
		if (!this.token) {
			await this.login();
		}

		const response = await axios.delete(
			`http://127.0.0.1:5000/cards/${card.id}`,
			{
				headers: {
					Authorization: `Bearer ${this.token}`
				}
			}
		)

		return response.data
	}
}

export default Api;
