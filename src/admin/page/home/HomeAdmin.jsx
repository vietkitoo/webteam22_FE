import Featured from '../../component/featured/Featured'
import Sidebar from '../../component/sidebar/Sidebar';

const HomeAdmin = () => {
  return (
    <div className='homeadmin'>
    <Sidebar/>
    <div className="homeContainer">
        <div className="charts">
          <Featured />
        </div>
        <div className="listContainer">
          <div className="listTitle">Giao dịch gần nhất</div>
        </div>
      </div>
    </div>
  );
};

export default HomeAdmin;