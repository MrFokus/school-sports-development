export default function ({store,redirect,route}){
  if(!store.getters['discipline/active'][route.params.name]){
    redirect("/")
  }
}
