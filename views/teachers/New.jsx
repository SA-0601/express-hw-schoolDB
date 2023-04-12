const React = require("react");

function NewTeacher() {
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>
      <h3>
        <a href="/database">Database(Students & Teachers)</a>
      </h3>
      <h1>Add New Teacher to School</h1>
      <form action="/teachers" method="POST">
        Name: <input type="text" name="name" />
        <br />
        Age: <input type="number" name="age" />
        <br />
        <select name="gender" id="gender">
          <option value="">-Select Gender-</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <br />
        Salary: <input type="number" name="salary" />
        <br />
        <input type="submit" value="Create new teacher" />
      </form>
    </div>
  );
}

module.exports = NewTeacher;
