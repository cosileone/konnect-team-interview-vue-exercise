const Services = {
  namespaced: true,
  state: () => ({
    services: []
  }),
  mutations: {
    SET_SERVICES (state, value) {
      state.services = value
    }
  },
  actions: {
    setServices ({ commit }, services) {
      commit('SET_SERVICES', services)
    }
  },
  getters: {
    getServiceById: (state) => (id) => {
      return state.services.find(service => service.id === id)
    },
    filterServices: (state) => ({ searchTerm }): any[] => {
      return searchTerm !== ''
        ? state.services.filter(service => {
          return ['name', 'description']
            .map(property => service[property].toLowerCase().includes(searchTerm.toLowerCase()))
            .some(Boolean)
        })
        : state.services
    }
  }
}

export default Services
