const { createStore } = window['Vuex'];

export const store = createStore({
    state() {
        return {
            sideData: ["ahmet", "mehmet", "emin", "apo"],
            selectedData: "",
        }
    }
})