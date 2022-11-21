import Loginform from "../component/Form/LoginForm";
import Header from "../component/header/header";
import './style.css'
import 'react-bootstrap'

function support() {
    return(
        <>
            <Header />
            <div className="content" >
                <div className="intro">
                    <div className="color-overlay row">
                        <div className="col">
                            <h1 className="">hello</h1>
                        </div>
                        <div className="col">
                            <Loginform />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default support;
