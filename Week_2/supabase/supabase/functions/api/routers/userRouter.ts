import { Hono } from "https://deno.land/x/hono/mod.ts";
import { UserController } from "../controllers/userController.ts";

const userRouter = new Hono();

const userController = new UserController();

userRouter.post("/fcm-token", (c) => userController.postFCMTokenV1(c));

userRouter.delete("/fcm-token", (c) => userController.deleteFCMTokenV1(c));

userRouter.get("/fcm-token", (c) => userController.getFCMTokensV1(c));

export default userRouter;