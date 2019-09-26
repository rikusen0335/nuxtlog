export const state = () => ({
  posts: [
    {
      id: 0,
      title: 'test',
      release_date: '2006 / 09 / 17',
      update_date: '2007 / 07 / 29',
      text: 'ダミーテキスト1'
    },
    {
      id: 1,
      title: 'タイトル1',
      release_date: '2007 / 11 / 27',
      update_date: '2007 / 11 / 29',
      text: 'ダミーテキスト1'
    },
    {
      id: 2,
      title: 'タイトル2',
      release_date: '2008 / 03 / 05',
      text: 'ダミーテキスト2'
    },
    {
      id: 3,
      title: 'A long way',
      release_date: '2008 / 06 / 16',
      update_date: '2008 / 07 / 02',
      text: 'When I was child, my father told me "spend a life you will remember." and I actually do that. They are - my brothers - not clever, spend their life a lot of garbage like smoker.'
    },
    {
      id: 4,
      title: '人間社会、ポリスとはいかにつくられるか',
      release_date: '2008 / 06 / 21',
      text: '我々は孤独な生き物であるがゆえに、社会を作り、仲間を作ろうとするのだ。'
    }
  ]
})

export const mutations = {
  add(state: any, posts: any) {
    state.posts = posts
  }
}
