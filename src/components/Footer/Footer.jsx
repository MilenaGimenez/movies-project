import {Layout} from 'antd';
import './Footer.sass';

const Footer = () => {
    const {Footer} = Layout;
    return (
        <Footer className="footer">
            <p>🎬 Movie Finder por
                <a href="https://github.com/MilenaGimenez/" target="_blank"> Milena Gimenez</a>
            </p>
            
        </Footer>
    );
};

export default Footer;