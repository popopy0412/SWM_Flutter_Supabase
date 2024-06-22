export class UserRepository {
    // 1. 유저의 토큰을 반환하는 함수
    async getFCMTokenByUserID(userID: string): Promise<string[]> {
        return ["token1", "token2", "token3"];
    }

    // 2. 유저의 토큰을 저장하는 함수
    async addFCMToken(userID: string, fcmToken: string): Promise<boolean> {
        return true;
    }

    // 3. 유저의 토큰을 지우는 함수
    async deleteFCMToken(userID: string, fcmToken: string): Promise<boolean> {
        return true;
    }
}