const React = require("react");
function IndexTeachers(props) {
  const { teachers } = props;
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>
      <h3>
        <a href="/database">Database(Students & Teachers)</a>
      </h3>
      <h3>
        <a href="/teachers/new">Add New Teacher</a>
      </h3>
      <h1>Teachers Data</h1>
      <ul>
        {teachers.map((teacher, i) => {
          return (
            <li>
              <a href={`/teachers/${i}`}>{teacher.name}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

module.exports = IndexTeachers;
