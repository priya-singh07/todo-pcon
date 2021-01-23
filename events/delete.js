const db = require("../config/db");

module.exports = async (req, res) => {
    try {
        let id = req.params.id;
        if(id) {
          let sql = "DELETE FROM todotable WHERE id=?";
          let result = await db.query(sql, [id]);
          res.status(200).json({
            message: "Task Deleted",
          });
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