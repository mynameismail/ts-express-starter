import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../services/mysql';

interface UserInstance extends Model {
    id: number;
    username: string;
    phone: string;
}

export const User = sequelize.define<UserInstance>('User', {
    id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true
    },
    username: DataTypes.STRING(100),
    phone: DataTypes.STRING(15)
}, {
    tableName: 'users',
    timestamps: false
});
