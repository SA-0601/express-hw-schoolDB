const React = require("react");
function ShowTeacher(props) {
  const { teacher } = props;
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>
      <h3>
        <a href="/database">Database(Students & Teachers)</a>
      </h3>

      <h1>Teacher Details:</h1>
      <h3>Name: {teacher.name}</h3>
      <h3>Age: {teacher.age}</h3>
      <h3>Gender: {teacher.gender}</h3>
      <h3>Salary: {teacher.salary}</h3>
    </div>
  );
}

module.exports = ShowTeacher;
