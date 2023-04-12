const React = require("react");
function ShowStudent(props) {
  const { student } = props;
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>
      <h3>
        <a href="/database">Database(Students & Teachers)</a>
      </h3>
      <h1>Student Details:</h1>
      <h3>Name: {student.name}</h3>
      <h3>Age: {student.age}</h3>
      <h3>Grade: {student.grade}</h3>
      <h3>Gender: {student.gender}</h3>
    </div>
  );
}

module.exports = ShowStudent;
