import fs from "fs/promises";

(async () => {
    fs.writeFile("./data.txt",Math.random().toString(), "utf-8");
})();
