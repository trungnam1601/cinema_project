import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

function SubMenu({ title, to, onClick }) {
    return (
        <div className={cx('menu-sub-list-item')}>
            <NavLink className={(nav) => cx('link', { active: nav.isActive })} to={to} onClick={onClick}>
                <span>{title}</span>
            </NavLink>
        </div>
    );
}

export default SubMenu;
