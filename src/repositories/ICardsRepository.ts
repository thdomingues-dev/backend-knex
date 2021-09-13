import { Card } from "../entities/Card";

export interface ICardsRepository {
	findAllCards(): Promise<Card[]>
	save(card: Card): Promise<Card>
}
