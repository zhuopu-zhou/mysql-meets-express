// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  //insert credentialsForBC here
})

// const query = `SELECT * FROM Products`;

// connection.query(query, (err, results, fields) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(results);
// });

const getAllProducts = async () => {
  const query = `SELECT * FROM Products`;
  const [results, fields] = await connection.promise().query(query);
  console.log(results);
  return results;
};


const createProduct = async (product) => {
  const insertQuery = `INSERT INTO Products (Description,SKU,UserId)
  VALUES ('${product.description}','${product.sku}',${product.userId})`

  const[results,fields] = await connection.promise().query(insertQuery);

  console.log(results);

  return results;
};

//cretae product to add to mysql
const product1 = {
  description: "RTX 9900",
  sku: "SKU234",
  userId: 1,
};

createProduct(product1);

getAllProducts();

connection.end();
