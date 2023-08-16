
import { useEffect, useMemo, useState } from 'react';
import Header from './Header';
import './main-page.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import FeaturedHouse from './featured-house';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import SearchResults from '../search-results';

function App() {
  const [allHouses, setAllhouses] = useState([]);

    useEffect (() => {
      const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllhouses(houses)
      };
      fetchHouses();
    } , []); 

    const featuredHouse = useMemo (() => {
       if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
       }
    }, [allHouses]);

  return (
    <Router>
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter allHouses={allHouses} />
        
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults allHouses={allHouses} />
          </Route>

          <Route path="/house/:id">
            <HouseFromQuery allHouses={allHouses}  />
          </Route>
          
          <Route path="/">
            <FeaturedHouse house={featuredHouse} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
