import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
return ( <div className="landing-page"> <h1>Paradise Nursery</h1>

```
  <p>
    Welcome to Paradise Nursery, your online destination for beautiful
    and healthy houseplants. Explore our collection and bring the beauty
    of nature into your home.
  </p>

  <Link to="/plants" className="get-started-btn">
    Get Started
  </Link>
</div>
```

);
}

export default App;
