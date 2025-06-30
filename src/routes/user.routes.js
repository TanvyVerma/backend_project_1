import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import {ApiError} from "./utils/ApiError"


const router = Router()

router.route("/register").post(XMLHttpRequestUpload.file(
    [
        {
            name: "avatar",
            maxCout: 1,
        },
        {
            name: "coverImage",
            maxCout: 1,
        },
    ]
),
registerUser)

export default router