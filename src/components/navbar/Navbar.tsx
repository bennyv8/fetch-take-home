const Navbar = () => {
  //TODO make it response
  return (
    <div className="flex flex-row justify-evenly">
      <a href="/favorites">Favorites</a>
      <a href="/search">Search</a>
      <a href="/login">Sign In</a>
    </div>
  );
};

export default Navbar;
