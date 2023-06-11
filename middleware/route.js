export default function ({store,redirect,route}){
  // if(store.getters[])
  console.log(store.getters['discipline/active'])
  if(!store.getters['discipline/active'][route.params.name]){
    redirect("/")
  }
}
