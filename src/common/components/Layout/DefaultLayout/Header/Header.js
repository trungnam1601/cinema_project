import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import { Container, Row } from 'react-bootstrap';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <Container>
                <Row></Row>
            </Container>
        </header>
    );
}

export default Header;
