import classes from './SearchItem.module.css'

const SearchItem = props=> {

    return (
        <div className= {classes.searchitem}>
            <h4>{props.scenario}</h4>
            <div style = {{display: 'flex'}}>
                <h6 style={{paddingRight: '20px'}}>Configuration Item/Product:<span style={{color:"#EF5455"}}> {props.product_configItem} </span></h6>
                <h6 style={{paddingRight: '20px'}}>Domain:<span style={{color:"#EF5455"}}> {props.domain} </span></h6>
                <h6 style={{paddingLeft: '20px'}}>KB Article: <a target= "_blank" rel="noreferrer" href= {props.url}>{props.kb}</a></h6>
                {/* <h6 style={{paddingLeft: '20px'}}>KB Article: <span style={{color:"#EF5455"}}>{props.kb}</span></h6> */}
            </div>
            <div style = {{display: 'flex'}}>
                <h6 tyle={{paddingRight: '20px'}}>Service: <span style={{color:"#EF5455"}}> {props.service} </span></h6>
                <h6 style={{paddingLeft: '20px'}}>Service offering: <span style={{color:"#EF5455"}}> {props.service_offering} </span></h6>
                <h6 style={{paddingLeft: '20px'}}>Ticket category: <span style={{color:"#EF5455"}}> {props.ticket_category} </span></h6>
            </div>
        </div>
    )

}

export default SearchItem;
