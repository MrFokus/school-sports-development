export const state = () => ({
  active: false,
  viewing_photo:null,
})
export const getters ={
  active: s => s.active,
  viewing_photo: s => s.viewing_photo,
}
export const mutations = {
  setModalActive(store, payload){
    store.active = payload
  },
  setViewingPhoto(store, payload){
    store.viewing_photo = payload
  },
}
