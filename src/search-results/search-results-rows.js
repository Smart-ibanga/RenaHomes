const SearchResultRow = ({house}) => {
    const setActive = () => {};

    return ( 
        <tr onClick={setActive}>
            <td>{house.address}</td>
            <td>{house.prices}</td>
            <td>{house.likes}</td>
        </tr>
     );
}
 
export default SearchResultRow;