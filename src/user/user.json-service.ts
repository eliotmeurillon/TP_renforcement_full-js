import { User } from './user';
import { UserService } from './user.service';
import * as fs from 'fs';

const FILE_PATH = './src/user/users.json';

export class UserJSONService implements UserService {
    add(username: string): User {
        const rawData = fs.readFileSync(FILE_PATH, 'utf8');
        const users: User[] = JSON.parse(rawData);

        if (users.some((u) => u.username === username)) {
            throw new Error('Username already exists.');
        }

        const maxId = users.reduce((acc, user) => Math.max(acc, user.id), 0);
        const newUser: User = { id: maxId + 1, username };

        users.push(newUser);
        fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));

        return newUser;
    }

    getById(id: number): User | null {
        const rawData = fs.readFileSync(FILE_PATH, 'utf8');
        const users: User[] = JSON.parse(rawData);

        let user = users.find((u) => u.id === id);
        return user || null;
    }
}
