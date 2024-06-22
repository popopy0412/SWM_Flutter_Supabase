import { Context } from "https://deno.land/x/hono/mod.ts";
import { UserService } from "../services/userService.ts";
import { createResponse } from "../lib/response/responseFormat.ts";
import { ResponseCode } from "../lib/response/responseCode.ts";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    async postFCMTokenV1(c: Context) {
        const { fcmToken } = await c.req.json();

        if (!fcmToken) {
            return c.json(
                createResponse(
                    ResponseCode.INVALID_PARAMETER,
                    "Missing FCM Token",
                    null
                )
            );
        }

        const result = await this.userService.addFCMToken("mock_id", fcmToken);

        return c.json(
            result ? createResponse(
                ResponseCode.SUCCESS,
                "성공",
                null,
            ) : createResponse(
                ResponseCode.SERVER_ERROR,
                "실패",
                null,
            )
        );
    }

    async getFCMTokensV1(c: Context) {
        const tokens = await this.userService.getFCMTokenByUserID("mock_id");

        return c.json(
            createResponse(
                ResponseCode.SUCCESS, 
                "성공",
                { fcmTokens: tokens },
            ),
        );
    }

    async deleteFCMTokenV1(c: Context) {
        const { fcmToken } = await c.req.json();

        if (!fcmToken) {
            return c.json(
                createResponse(
                    ResponseCode.INVALID_PARAMETER,
                    "실패",
                    null,
                ),
            );
        }

        const result = await this.userService.deleteFCMToken("mock_id", fcmToken);

        return c.json(
            result ? createResponse(
                ResponseCode.SUCCESS,
                "성공",
                null,
            ) : createResponse(
                ResponseCode.SERVER_ERROR,
                "실패",
                null,
            )
        );
    }
}