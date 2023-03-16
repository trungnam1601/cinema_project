import Header from '../components/Header/Header';

import { Container } from 'react-bootstrap';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import PreHeader from '../components/PreHeader/PreHeader';

const cx = classNames.bind(styles);
function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <PreHeader />
            <Header />
            <Container>
                <div className={cx('content')}>{children}</div>
            </Container>
        </div>
    );
}

export default DefaultLayout;
