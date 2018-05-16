const state = {
  showSidebar: false,
  menuItems: [
    {
      icon: 'work_outline',
      title: 'Portfolio',
      link: 'portfolio',
    },
    {
      icon: 'timeline',
      title: 'Stocks',
      link: 'stocks',
    },
    {
      icon: 'update',
      title: 'End day',
    },
    {
      icon: 'backup',
      title: 'Save & Load',
      items: [
        {
          icon: 'save',
          title: 'Save data',
        },
        {
          icon: 'restore',
          title: 'Load data',
        },
      ],
    },
  ],
};

const getters = {

};

const mutations = {
  toggleSidebar: (state) => {
    state.showSidebar = !state.showSidebar;
  },
};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions,
};
