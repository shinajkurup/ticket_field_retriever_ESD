import {useState} from 'react';

import classes from './AvailableProductList.module.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function AvailableProductList({products, onProdClick}){
    const [activeLiId, setactiveLiId] = useState('');
    const [displayUL, setdisplayUL] = useState(false)
    const [domainName, setdomainName] = useState("");



    function onLiClick(e){
        setactiveLiId(e.target.innerText);
        onProdClick(e.target.innerText);
    }

    function onDomainButtonClick(e){
        setdisplayUL(!displayUL) ;
        setdomainName(e.target.innerText);
    }

    let uniqueProductsM2R = [];

    uniqueProductsM2R = products.map((prod)=>prod.domain === "M2R" ? prod.product_configItem : "");
        
    uniqueProductsM2R = [...new Set(uniqueProductsM2R)];
    uniqueProductsM2R = uniqueProductsM2R.sort();

    let uniqueProductsS2P = [];

    uniqueProductsS2P = products.map((prod)=>prod.domain === "S2P"?prod.product_configItem: "");
        
    uniqueProductsS2P = [...new Set(uniqueProductsS2P)];
    uniqueProductsS2P = uniqueProductsS2P.sort();

    return (
        <>
        <button className= {classes.button} onClick = {onDomainButtonClick}>M2R</button>
        <ul className= {classes.listgroup} style= {displayUL && domainName==="M2R" ? {display:"block"} : {display:"none"}}>
            {/* <li className= {activeLiId==='' || activeLiId=== "Search All"? classes.active:''} onClick= {onLiClick} ><strong>Search All</strong></li> */}
            { uniqueProductsM2R.map((prod)=> 
                <li key= {prod} onClick= {onLiClick} className= {activeLiId === prod ? classes.active: ''} >
                    <strong>{prod}</strong>
                </li>)}
        </ul>

        <button className={classes.button}  onClick = {onDomainButtonClick}>S2P</button>
        <ul className= {classes.listgroup} style= {displayUL && domainName==="S2P" ? {display:"block"} : {display:"none"}}>
            {/* <li className= {activeLiId==='' || activeLiId=== "Search All"? classes.active:''} onClick= {onLiClick} ><strong>Search All</strong></li> */}
            { uniqueProductsS2P.map((prod)=> 
                <li key= {prod} onClick= {onLiClick} className= {activeLiId === prod ? classes.active: ''} >
                    <strong>{prod}</strong>
                </li>)}
        </ul>
        </>
    );
}

export default AvailableProductList;