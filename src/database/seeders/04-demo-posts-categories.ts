import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('post_categories', [
      {
        post_id: 1,
        category_id: 1,
      },
      {
        post_id: 2,
        category_id: 2,
      },
    ]);
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('post_categories', {}, {});
  },
};
