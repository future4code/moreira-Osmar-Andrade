import app from "./app"
import getAlllcharacters from "./endPoints/getAlllcharacters"

app.get("/characters",getAlllcharacters)
app.put("/characters", )