export default function ({store, redirect}) {
    if(!store.getters.me) {
        return redirect('/')
    }
}
