const React = require("react");

function NewStudent() {
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>
      <h3>
        <a href="/database">Database(Students & Teachers)</a>
      </h3>
      <h1>Add New Student to School</h1>
      <form action="/students" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Age: <input type="number" name="age" />
        <br />
        Grade: <input type="number" name="grade" />
        <br />
        <select name="gender" id="gender">
          <option value="">-Select Gender-</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        <input type="submit" value="Create new student" />
      </form>
    </div>
  );
}

module.exports = NewStudent;
