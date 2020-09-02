import rules from '../pages/rules/rules.json'

export const state = () => ({
  listings: {},
  rules: {},
})

export const getters = {
  getListings(state) {
    return state.listings
  },
  getListingById: (state) => (id) => {
    return state.listings.find(
      (listing) => listing.PropertyID.Identification.IDValue === id
    )
  },
  getRules(state) {
    return state.rules
  },
}
export const mutations = {
  setListings(state, payload) {
    state.listings = payload
  },
  setRules(state, payload) {
    state.rules = payload
  },
}

export const actions = {
  async nuxtServerInit({ state, dispatch, commit }) {
    const parseString = require('xml2js').parseStringPromise
    const res = await this.$axios.get(
      'http://jessicawatts.managebuilding.com/Resident/PublicPages/XMLRentals.ashx?listings=all'
    )
    const result = await parseString(res.data)
    const property = result.PhysicalProperty.Property
    commit('setListings', property)
    commit('setRules', rules)
  },
}
