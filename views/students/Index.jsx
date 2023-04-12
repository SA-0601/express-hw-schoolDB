const React = require("react");
function IndexStudents(props) {
  const { students } = props;
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>
      <h3>
        <a href="/database">Database(Students & Teachers)</a>
      </h3>
      <h3>
        <a href="/students/new">Add New Student</a>
      </h3>

      <h1>Students Data</h1>
      <ul>
        {students.map((stud, i) => {
          return (
            <li>
              <a href={`/students/${i}`}>{stud.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = IndexStudents;
