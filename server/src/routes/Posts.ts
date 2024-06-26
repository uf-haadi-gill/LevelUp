import express from "express";
import * as PostsController from "../controllers/Posts";

const router = express.Router();

router.post("/create", PostsController.create);
router.get("/myposts/:id", PostsController.getMyPosts);
router.get("/allposts", PostsController.getAllPosts);
router.post("/update/title", PostsController.updateTitle);
router.post("/update/content", PostsController.updateContent);
router.post("/update/caption", PostsController.updateCaption);
router.post("/update/complete", PostsController.updateCompletion);
router.post("/update/likes", PostsController.updateLiked);
router.post("/delete", PostsController.deletePost);

export default router;