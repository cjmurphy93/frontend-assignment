import './footer.scss';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content" >
                 <h3 className="footer__copyright">© 2020 Travelize</h3>
                <div className="footer__right">
                    <a className="footer__link" href="#">Privacy Policy</a>
                    <a className="footer__link" href="#">Terms and conditions</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;