import React from 'react';
import { getRegionVal, setRegionVal } from '../../../helpers'
import { regions } from '../../../config/default';

class RegionDropDown extends React.Component {

    constructor (){
        super();
        this.drpRef = React.createRef();
        this.changeRegion = this.changeRegion.bind(this);
        this.state = { regionVal : '' };
    }

    componentDidMount(){
        let regionVal = getRegionVal();
        if(!regionVal){
            setRegionVal();
        }
        this.setState({ regionVal : regionVal });
    }

    changeRegion(){
        let drpDwn = this.drpRef.current;
        let val = 'gb';
        if(drpDwn){
            val = drpDwn.value;
        }
        setRegionVal(val);
        location.href = '/';
    }

    render() {
        let regionVal = this.state.regionVal;
        let renderOptions = regions.map((item,k)=>{
            let itemUC = item.toUpperCase();

            return (
                <option role="option" key={`opt-${k}`} value={item}>{itemUC}</option> 
            );
        })
        return (
            <div className="region-dropdown">
                <label id="rg" htmlFor="region">Region: </label>
                <select aria-labelledby="rg" aria-label="Region" value={regionVal} ref={this.drpRef} name="region" id="region" onChange={this.changeRegion}>
                    {renderOptions}
                </select>
            </div>
        );
    }
    
}

export default RegionDropDown;
