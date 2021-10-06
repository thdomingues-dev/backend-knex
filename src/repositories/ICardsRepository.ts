import { Card } from "../entities/Card";

export interface ICardsRepository {
	findAllCards(): Promise<Card[]>
	findById(id: number): Promise<Card[]>
	update(payload: any): Promise<Card>
	save(card: Card): Promise<Card>
	exists(id: number): Promise<boolean>
}
