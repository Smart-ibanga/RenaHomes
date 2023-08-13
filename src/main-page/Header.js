import Logo from './RENA-REAL.png';


const Header = ({subtitle}) => (

  <header className="row">
    <div className="col-md-5">
        <img src={Logo} alt="logo" className='logo' />
    </div>
    <div className='col-md-7 mt-5 subtitle'>
        {subtitle}
    </div>
  </header>
);
export default Header