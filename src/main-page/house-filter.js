import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const HouseFilter = ({allHouses}) => {
     const history = useHistory();
     const countries = allHouses
     ? Array.from ( new Set (allHouses.map ((h) =>h.country)))
     : [];
     countries.unshift(null);

     const onSearchChange = (e) => {
        const country = e.target.value;
        history.push(`/searchresults/${country}`);
     }
    return ( 
       <div className="row mt-3">
            <div className="offset-md-4 col-md-2">
                Look for your dream house in country
            </div>
            <div className="col-md-4 mb-3">
                <select className="form-select" onClick={onSearchChange}>
                    { countries.map( (c)=> (
                        <option key={c} value={c}>
                            {c}
                        </option>
                      ))
                    }
                </select>
            </div>

       </div>
     );
}
 
export default HouseFilter; 