import { Card } from "../entities/Card";

export interface ICardsRepository {
	save(card: Card): Promise<Card>
}
