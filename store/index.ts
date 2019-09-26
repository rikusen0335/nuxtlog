import { Posts } from '~/types/post'

import { ActionTree, MutationTree, GetterTree, ActionContext } from 'vuex'

interface State {
  posts: Object []
}

export const state = (): State => ({
  posts: [
    {
      id: 0,
      title: 'test',
      slug: 'test',
      releaseDate: '2006 / 09 / 17',
      updateDate: '2007 / 07 / 29',
      mainText: 'hogehoge'
    },
    {
      id: 1,
      title: 'タイトル1',
      slug: 'title1',
      releaseDate: '2007 / 11 / 27',
      updateDate: '2007 / 11 / 29',
      mainText: 'ダミーテキスト1'
    },
    {
      id: 2,
      title: 'タイトル2',
      slug: 'title2',
      releaseDate: '2008 / 03 / 05',
      mainText: 'ダミーテキスト2'
    },
    {
      id: 3,
      title: 'A long way',
      slug: 'a-long-way',
      releaseDate: '2008 / 06 / 16',
      updateDate: '2008 / 07 / 02',
      mainText: 'When I was child, my father told me "spend a life you will remember." and I actually do that. They are - my brothers - not clever, spend their life a lot of garbage like smoker.'
    },
    {
      id: 4,
      title: '人間社会、ポリスとはいかにつくられるか',
      slug: 'how-police-made',
      releaseDate: '2008 / 06 / 21',
      mainText: '我々は孤独な生き物であるがゆえに、社会を作り、仲間を作ろうとするのだ。'
    }
  ]
})

export const getters: GetterTree<State, any> = {
  posts: state => state.posts,
  currentPost: state => {
    return state.posts
  }
}

export const mutations: MutationTree<State> = {
}

export const actions: ActionTree<State, any> = {
}
