import classes from './SearchList.module.css';
import SearchItem from './SearchItem';

const SearchList = props =>{
    console.log(props.searchResults)
    return (
        <div className= {classes.searchlist}>
            <ul>
                {props.searchResults.map(({product_configItem,id, scenario, kb, url, domain, service, service_offering, ticket_category})=> 
                <SearchItem 
                    key = {id}
                    product_configItem = {product_configItem}
                    domain = {domain}
                    scenario= {scenario}
                    service ={service}
                    kb= {kb}
                    url= {url}
                    service_offering = {service_offering}
                    ticket_category = {ticket_category}
                />)}
            </ul>
        </div>
    )
}

export default SearchList;
