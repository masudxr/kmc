import "./App.css";

function App() {
  return (
    <>
      <>
        <h1>You Are Currently Logged In</h1>
        <div className="container">
          <div className="form-container">
            <div className="form-blob">
              <img
                src="/logo.jpeg"
                alt="blob"
                className="blob-image blob-image--1"
              />
              <img
                src="/logo.jpeg"
                alt="blob"
                className="blob-image blob-image--1"
              />
              <img
                src="/logo.jpeg"
                alt="blob"
                className="blob-image blob-image--1"
              />
            </div>
          </div>
          <div className="form-header">
            <p>Please Enter Your Details</p>
            <h1>Welcome Back</h1>
          </div>
          <form className="form-box" action="">
            <div className="input-group">
              <input
                type="email"
                id="email"
                className="input-field"
                placeholder=""
                required
              />
              <label htmlFor="email" className="floating-label">
                Email Address
              </label>
            </div>
            <div className="input-group">
              <input
                type="password"
                id="password"
                className="input-field"
                placeholder=""
                required
              />
              <label htmlFor="password" className="floating-label">
                Password
              </label>
            </div>
            <div className="input-group checkbox-group">
              <div className="form-col remember-me">
                <input
                  type="checkbox"
                  id="remember-me-checkbox"
                  className="checkbox-field"
                />
                <label htmlFor="remember-me-checkbox">Remrmber Me!</label>
              </div>
              <div className="form-col">
                <a href="#" className="form-link">Forget Password</a>
              </div>
            </div>
            <button type="submit" className="form-btn--submit">Sign In</button>
          </form>          
        </div>
      </>
      <h1>Hello Gamers Welcome to Our Journey !</h1>
      <h2>Here Some Of my TOdo List</h2>
      <>
        <h1>Tasks List</h1>
        <li>Login Panel</li>
        <li>Management Drashboard</li>
        <li>Students List with Total Info with Basic Salary</li>
        <li>Teachers List with total Info with Basic Salary</li>
        <li>Salary Panel for Students</li>
        <li>Salary Panel for Teachers</li>
        <li>Total Staff list</li>
      </>
    </>
  );
}
export default App;
