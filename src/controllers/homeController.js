import pool from "../configs/connectDB";

const getHomePage = async (req, res, next) => {
  const [rows, fields] = await pool.execute("SELECT * FROM users");
  return res.render("index.ejs", { userData: rows });
};

const getDetailPage = async (req, res, next) => {
  const userId = req.params.userId;
  const [user] = await pool.execute(`SELECT * FROM users where id = ?`, [
    userId,
  ]);
  return res.json({ user });
};

const createNewUser = async (req, res, next) => {
  const { firstName, lastName, email, address } = req.body;
  await pool.execute(
    "INSERT INTO users (firstName, lastName, email, address) VALUES (?, ?, ?, ?)",
    [firstName, lastName, email, address]
  );
  return res.redirect("/");
};

const deleteUser = async (req, res, next) => {
  const { userId } = req.body;
  await pool.execute("DELETE FROM users WHERE id = ?", [userId]);
  return res.redirect("/");
};

const getEditUser = async (req, res, next) => {
  const userId = req.params.userId;
  const [user] = await pool.execute(`SELECT * FROM users where id = ?`, [
    userId,
  ]);
  console.log(user);
  return res.render("update.ejs", { ...user[0] });
};

const updateUser = async (req, res, next) => {
  const { id, firstName, lastName, email, address } = req.body;
  await pool.execute(
    `UPDATE users
  SET firstName = ?, lastName = ?, email = ?, address = ?
  WHERE id = ? `,
    [firstName, lastName, email, address, id]
  );
  return res.redirect("/");
};

module.exports = {
  getHomePage,
  getDetailPage,
  createNewUser,
  deleteUser,
  getEditUser,
  updateUser,
};
