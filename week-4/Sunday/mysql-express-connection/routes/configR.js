import count from "./question-R.js"
import aggregationFunctions from "./aggregationFunctions.js";
import where from "./where.js";
import distinct from "./distinct.js";
import join from "./join.js";
import group from "./group";
import order from "./order.js"


export default function configRotes(app) {
    app.use("/count", count);
    app.use("/aggregationFunctions", aggregationFunctions);
    app.use("/where", where);
    app.use("/distinct", distinct);
    app.use("/join", join);
    app.use("/group", group);
    app.use("/order", order)
    
    app.use((req, res) => {
        res.status(404).json({msg: "Route not found."});
    })
}