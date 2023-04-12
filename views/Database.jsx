const React = require("react");

function Database() {
  return (
    <div>
      <h3>
        <a href="/">Home Page</a>
      </h3>

      <h1>Welcome to ABC Primary School</h1>
      <h3>Here you can view our School Database of Students and teachers.</h3>
      <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
      </p>

      <h3>
        <a href="/students">Students</a>
      </h3>
      <h3>
        <a href="/teachers">Teachers</a>
      </h3>
    </div>
  );
}

module.exports = Database;
