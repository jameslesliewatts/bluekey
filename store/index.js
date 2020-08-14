import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = () => ({
  counter: 0,
})

export const mutations = {
  increment(state) {
    state.counter++
  },
}

export const actions = {
  async getListings() {
    const res = await this.$axios.get(
      'http://jessicawatts.managebuilding.com/Resident/PublicPages/XMLRentals.ashx?listings=all'
    )
    return res
  },
}
