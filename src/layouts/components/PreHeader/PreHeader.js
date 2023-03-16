import { Container } from 'react-bootstrap';
import styles from './PreHeader.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from './../../../config/config';

const cx = classNames.bind(styles);
function PreHeader() {
    return (
        <div className={cx('wrapper')}>
            <Container className={cx('container')}>
                <ul className={cx('account')}>
                    <li className={cx('account_item')}>
                        <Link src={config.routes.login} className={cx('account_item-link')}>
                            Đăng nhập
                        </Link>
                    </li>
                    <div className={cx('account_sperator')} />
                    <li className={cx('account_item')}>
                        <Link src={config.routes.register} className={cx('account_item-link')}>
                            Đăng ký
                        </Link>
                    </li>
                </ul>
            </Container>
        </div>
    );
}

export default PreHeader;
