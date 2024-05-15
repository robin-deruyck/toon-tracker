export const Genders = {
  Action: 0,
  Adventure: 1,
  Drama: 2,
  Fantasy: 3,
  Harem: 4,
  Shonen: 5,
  Friendship: 6,
  MartialArt: 7,
  Fight: 8,
  Comedy: 9,
  Demon: 10,
  Tragedy: 11,
  Ecchi: 12,
  War: 13,
  Historique: 14,
  Horror: 15,
  Isekai: 16,
  Josei: 17,
  Manga: 18,
  Mystery: 19,
  PostApo: 20,
  Psychologic: 21,
  Returner: 22,
  Romance: 23,
  SchoolLife: 24,
  SciFi: 25,
  Seinen: 26,
  Shojo: 27,
  SliceOfLife: 28,
  Sport: 29,
  Supernatural: 30,
  Surnatural: 31
}

export const Type: Record<string, number> = {
  Manga: 0,
  Manhwa: 1,
  Manhua: 2
}

export const Status: Record<string, number> = {
  InProgress: 0,
  Finished: 1,
  Cancelled: 2
}

export type Genders = (typeof Genders)[keyof typeof Genders]
export type Type = (typeof Type)[keyof typeof Type]
export type Status = (typeof Status)[keyof typeof Status]
