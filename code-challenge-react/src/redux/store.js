import { configureStore } from "@reduxjs/toolkit";
import blog from "./slice"

export default configureStore({
    reducer: {
        blog
    }
});