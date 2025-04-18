import mongoose, { model } from "mongoose";
import { WeatherInterface  } from "./interface";
import { WeatherSchema  } from "./schema";

export default mongoose.models.weather ||
    model<WeatherInterface>("Weather", WeatherSchema);