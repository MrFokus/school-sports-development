export const state = () => ({
  active: false,
  viewing:null,
})
export const getters ={
  active: s => s.active,
  viewing: s => s.viewing,
}
export const mutations = {
  setModalActive(store, payload){
    store.active = payload
  },
  setViewing(store, payload){
    store.viewing = payload
  },
}
