import React from 'react';

function Navbar() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={() => handleScroll('hero')} style={{ cursor: 'pointer' }}>
          Darker
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto d-flex gap-5">
            <li className="nav-item">
              <a className="nav-link px-4 fs-5 fw-semibold" onClick={() => handleScroll('hero')} style={{ cursor: 'pointer' }}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 fs-5 fw-semibold" onClick={() => handleScroll('projects')} style={{ cursor: 'pointer' }}>
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 fs-5 fw-semibold" onClick={() => handleScroll('skills')} style={{ cursor: 'pointer' }}>
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link px-4 fs-5 fw-semibold" onClick={() => handleScroll('contact')} style={{ cursor: 'pointer' }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;  // ✅ Correctly placed export
