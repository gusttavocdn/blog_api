import { DataTypes, QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
    await queryInterface.createTable('post_categories', {
      postId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'post_id',
        references: { model: 'blog_posts', key: 'id' },
        onDelete: 'CASCADE',
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'category_id',
        references: { model: 'categories', key: 'id' },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('post_categories');
  }
}