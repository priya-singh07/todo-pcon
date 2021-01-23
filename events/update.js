const db = require("../config/db");

module.exports = async (req, res) => {
    try {
        let id = req.params.id;
    let task = req.body.task;
    if (id && task) {
      let check_sql = "SELECT * FROM todotable WHERE id=?";
      let [check_result] = await db.query(check_sql, [id]);
      if (check_result) {
        let sql = "UPDATE todotable set task=? WHERE id=?";
        let result = await db.query(sql, [task, id]);
        res.status(200).json({
          message: "Task Edited",
        });
      } else {
        res.status(400).json({
          message: "Task Doesn't Exist",
        });
      }
    } else {
      res.status(400).json({
        message: "Missing Required Field",
      });
    }
      } catch (err) {
        res.status(500).json({
          message: "Error occurred",
        });
      }
};