module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (
    name,
    email,
    phone_number,
    password,
    favourited_pets,
    location
  ) => {
    const query = {
      text: `INSERT INTO users (name, email, phone_number, password, favourited_pets, location) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      values: [name, email, phone_number, password, favourited_pets, location],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmail,
    addUser,
  };
};