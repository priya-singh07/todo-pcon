const db = require("../config/db");

module.exports = async (req, res) => {
    try {
        let status = req.body.status;
        console.log(status);
        if (status) {
          let sql = "SELECT * FROM todotable WHERE isActive=? ORDER BY id DESC";
          result = await db.query(sql, [status]);
        } else {
          let sql = "SELECT * FROM todotable ORDER BY id DESC";
          var result = await db.query(sql);
        }
        res.status(200).json({
          message: "Data Fetched",
          data: result,
        });
      } catch (err) {
        res.status(500).json({
          message: "Error occurred",
        });
      }
};