function Nav() {
  const navStyle = {
    color: "darkgrey",
    display: "flex",
    justifyContent: "space-around",
    listStyle: "none",
  }
  return (
      <nav className="main-nav">
          <ul style={navStyle}>
              <li>Home</li>
              <li>Articles</li>
              <li>About</li>
              <li>Contact</li>
          </ul>
      </nav>
  );
};

export default Nav;
