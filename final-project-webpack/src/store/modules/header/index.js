import mutations from './mutations';

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
      action: 'endDay',
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

export default {
  state,
  mutations,
};
