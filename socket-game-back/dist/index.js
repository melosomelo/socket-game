const express = require("express");
const app = express();
app.use((req, res) => {
    return res.status(200).send(`<h1> Hello world! </h1>`);
});
app.listen(3000);
//# sourceMappingURL=index.js.map