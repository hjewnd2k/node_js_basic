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

module.exports = {
  getHomePage,
  getDetailPage,
};
