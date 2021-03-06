import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Main from "./pages/main";
import Media from "./pages/media";

const bgClassNameIndex = Math.floor(Math.random() * 2) + 1;

function App() {
  return (
    <div className={`App bg${bgClassNameIndex}`}>
      <BrowserRouter basename="/fileadmin/pannellum">
        {/* /fileadmin/pannellum/ */}
        {/* elisabethschule-ui */}
        {/* https://elisabethschule.de/fileadmin/pannellum */}
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/media/:link?" component={Media} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
