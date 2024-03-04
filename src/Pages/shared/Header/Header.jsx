import moment from 'moment';
import logo from '../../../assets/assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="" />
            <p>Journalis Without Fear or Favour</p>
            <p className='text-xl'>{moment().format(' ddd,MMMM D YYYY,')}</p>

        </div>
    );
};

export default Header;
