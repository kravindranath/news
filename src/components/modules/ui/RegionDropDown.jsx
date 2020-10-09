import React from 'react';
import { getRegionVal, setRegionVal } from '../../../helpers'

class RegionDropDown extends React.Component {

    constructor (){
        super();
        this.drpRef = React.createRef();
        this.changeRegion = this.changeRegion.bind(this);
    }

    componentDidMount(){
        let regionVal = getRegionVal();
        if(!regionVal){
            setRegionVal();
        }
    }

    changeRegion(){
        let drpDwn = this.drpRef.current;
        let val = 'us';
        if(drpDwn){
            val = drpDwn.value;
        }
        setRegionVal(val);
    }

    render() {
        let renderOptions = ['us', 'gb', 'au'].map((item,k)=>{
            let itemUC = item.toUpperCase();
            let isSelected = (item === getRegionVal());

            return isSelected ? (
                <option selected="selected" value={item}>{itemUC}</option>
            ) : (
                <option value={item}>{itemUC}</option>
            );
        })
        return (
            <div className="region-dropdown">
                <label htmlFor="region">Region: </label>
                <select ref={this.drpRef} name="region" id="region" onChange={this.changeRegion}>
                    {renderOptions}
                </select>
            </div>
        );
    }
    
}

export default RegionDropDown;
