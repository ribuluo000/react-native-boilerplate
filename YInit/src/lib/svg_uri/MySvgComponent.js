/**
 * Created by nick on 2017/4/20.
 */
import React, { PureComponent } from "react";
import SvgUri from "./SvgUri";

/**
 *
 *
 <MySvgComponent
 key={`productImages_${y_string_util.hashcode(uri)}`}
 style={{ height : 50, width : 50 }}
 source={sourceImg}/>
 */

export default class MySvgComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {

        let { source, style } = this.props;
        let view;
        view = (
            <SvgUri
                width={style.width || 30}
                height={style.height || 30}
                {...this.props}
            />
        );
        return view;
    }
}

