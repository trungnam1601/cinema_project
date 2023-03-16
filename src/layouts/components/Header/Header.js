import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../assets/images/images';
import config from '../../../config/config';
import Menu from './components/Menu/Menu';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <Container className={cx('container')}>
                <Link className={cx('header-logo')} src={config.routes.home}>
                    <img src={images.logo} alt="Logo"></img>
                </Link>
                <Menu />
            </Container>
        </header>
    );
}

export default Header;
