import { DataTypes, Model } from 'sequelize';
import connection from './';
import User from './User';

class BlogPosts extends Model {
  declare id: number;
  declare title: string;
  declare content: string;
  declare userId: number;
  declare published: Date;
  declare updated: Date;
}

BlogPosts.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    },
    content: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      field: 'user_id'
    },
    published: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    updated: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize: connection,
    underscored: true,
    tableName: 'blog_posts',
    timestamps: false
  }
);

BlogPosts.belongsTo(User, {
  as: 'user',
  foreignKey: 'userId'
});

User.hasMany(BlogPosts, {
  as: 'posts',
  foreignKey: 'userId'
});

export default BlogPosts;
