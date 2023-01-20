import { DataTypes, Model } from 'sequelize';
import connection from './';

class User extends Model {
  declare id: number;
  declare displayName: string;
  declare email: string;
  declare password: string;
  declare image: string;

  showDisplayName(): string {
    return this.displayName;
  }
}

User.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    displayName: {
      allowNull: false,
      type: DataTypes.STRING,
      field: 'display_name'
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: true,
      type: DataTypes.STRING
    }
  },
  {
    sequelize: connection,
    tableName: 'users',
    timestamps: false
  }
);

export default User;
