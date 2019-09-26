export interface Posts {
  title: string
  slug: string
  releaseDate: string
  updateDate: string | null
  mainText: string
}

export class Posts {
  public id: number = 0
  public title: string = ''
  public slug: string = ''
  public releaseDate: string = ''
  public updatedate: string | null = null
  public mainText: string = ''
}