import React from "react";
import style from "../scss/Title.module.scss"

function Title({title}){
    return(
        <h3 className={style.h3}>
            {title}
        </h3>
    )
}

export default Title;