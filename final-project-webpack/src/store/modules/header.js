const state = {
  showSidebar: false,
  menuItems: [
    {
      icon: 'work_outline',
      title: 'Portfolio',
    },
    {
      icon: 'timeline',
      title: 'Stocks',
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

};

const actions = {

};

export default {
  state,
  getters,
  mutations,
  actions,
};
