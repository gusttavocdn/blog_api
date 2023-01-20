import { DataTypes, Model } from 'sequelize';
import connection from './';
import BlogPosts from './BlogPost';
import Category from './Category';

class PostCategories extends Model {
  declare postId: number;
  declare categoryId: number;
}

PostCategories.init(
  {
    postId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'post_id',
      onDelete: 'CASCADE'
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'category_id',
      onDelete: 'CASCADE'
    }
  },
  { sequelize: connection, tableName: 'post_categories', timestamps: false }
);

// Many to Many Associations
BlogPosts.belongsToMany(Category, {
  through: PostCategories,
  as: 'categories',
  foreignKey: 'postId',
  otherKey: 'categoryId'
});

Category.belongsToMany(BlogPosts, {
  through: PostCategories,
  as: 'posts',
  foreignKey: 'categoryId',
  otherKey: 'postId'
});

export default PostCategories;
