import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if (username === '') {
            throw new Error('The username cannot be empty');
        }
        if (username.trim() === '') {
            throw new Error('The username cannot be whitespaced');
        }
        if (username.length < 3) {
            throw new Error('The username cannot be shorter than 3 characters');
        }
        // is the username whitespaced ?
        // other checks...
        return this.userService.add(username);
    }

    getById(id: number): User | null {
        if (id < 0) {
            throw new Error('The id cannot be negative');
        }
        if (id % 1 !== 0) {
            throw new Error('The id cannot be a decimal');
        }
        if (id === 0) {
            throw new Error('The id cannot be 0');
        }
        // is the id a decimal ?
        // is the id a negative number ?
        // other checks...
        return this.userService.getById(id);
    }
}
