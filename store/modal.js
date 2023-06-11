export const state = () => ({
  active: false,
})
export const getters ={
  active: s => s.active,
}
export const mutations = {
  setModalActive(store, payload){
    store.active = payload
  }
}
