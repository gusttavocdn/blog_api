import { DataTypes, Model } from 'sequelize';
import connection from './';

class Category extends Model {
  declare id: number;
  declare name: string;
}

Category.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  { sequelize: connection, tableName: 'categories', timestamps: false }
);

export default Category;
