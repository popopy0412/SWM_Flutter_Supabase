import { UserRepository } from "../repositories/userRepository.ts";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    async getFCMTokenByUserID(userID: string): Promise<string[]> {
        return await this.userRepository.getFCMTokenByUserID(userID);
    }

    async addFCMToken(userID: string, fcmToken: string): Promise<boolean> {
        return await this.userRepository.addFCMToken(userID, fcmToken);
    }

    async deleteFCMToken(userID: string, fcmToken: string): Promise<boolean> {
        return await this.userRepository.deleteFCMToken(userID, fcmToken);
    }
}