export interface IHero {
  _id: string,
  name: string,
  attackRating: string,
  defenceRating: string,
  classType: string,
  healthPoints: string,
  manaPoints: string,
  iconName: string,
}

export interface IRun {
  hero: IHero,
  user_id: string,
  _id: string,
}