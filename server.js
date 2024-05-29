import e from "express";
import { RESTAURANT } from "./data.js";
const app = e();

app.get("/", (req, res) => {
  res.render("./home.ejs", { RESTAURANT });
});

app.get("/menu", (req, res) => {
  res.render("./menu.ejs", { menu: RESTAURANT.menu });
});

app.get("/menu/:category", (req, res) => {
  const { category } = req.params;
  console.log(category, " <-- this is what was logged");
  let categoryMenu = RESTAURANT.menu.filter(
    (menuCategory) => menuCategory.category === category
  );

  console.log(categoryMenu);
  res.render("./category.ejs", { menu: categoryMenu, category: category });
});
app.listen(3000, () => {
  console.log(`Listening to port 3000`);
});
