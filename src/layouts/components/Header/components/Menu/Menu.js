import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import MenuItem from '../MenuItem/MenuItem';
import { Fragment, useState } from 'react';
import config from '../../../../../config/config';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import SubMenu from '../SubMenu/SubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Menu() {
    const [isActive, setIsActive] = useState(false);

    const handleActiveMenu = (e) => {
        if (e.target.className === 'title') {
            setIsActive(false);
        } else {
            setIsActive(true);
        }
    };
    return (
        <Fragment>
            <nav className={cx('primary-menu')}>
                <div>
                    <Tippy
                        // visible
                        interactive={true}
                        render={(attrs) => (
                            <div className={cx('menu-sub-wrapper')}>
                                <div className={cx('menu-sub-list')} tabIndex="-1" {...attrs}>
                                    <SubMenu title="Phim Đang Chiếu" onClick={handleActiveMenu} />
                                    <SubMenu title="Phim Sắp Chiếu" onClick={handleActiveMenu} />
                                </div>
                            </div>
                        )}
                    >
                        <div className={cx('movie', isActive ? 'active' : '')}>
                            PHIM
                            <FontAwesomeIcon className={cx('icon-down')} icon={faChevronDown} />
                        </div>
                    </Tippy>
                </div>
                <MenuItem title="LỊCH CHIẾU" to={config.routes.membership} onClick={handleActiveMenu} />
                <MenuItem title="GIÁ VÉ" to={config.routes.login} onClick={handleActiveMenu} />
                <MenuItem title="TIN MỚI VÀ ƯU ĐÃI" to={config.routes.register} onClick={handleActiveMenu} />
                <MenuItem title="THÀNH VIÊN" to={config.routes.home} onClick={handleActiveMenu} />
            </nav>
        </Fragment>
    );
}

export default Menu;
