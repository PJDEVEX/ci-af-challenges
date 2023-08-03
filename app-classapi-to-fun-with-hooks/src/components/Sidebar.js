import css from './css/Sidebar.module.css';
import React from "react";

const Sidebar = () => (
    <div className={css.sidebar}>
        <a href="#." target="_blank">MyPotos</a>
        <a href="#." target="_blank">MyIllustrations</a>
        <a href="#." target="_blank">MyPaintings</a>
    </div>
);

export default Sidebar;