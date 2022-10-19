import React from "react";
import { BsSmartwatch } from "react-icons/bs";
const Watches = () => {
  return (
    <div className='container mt-4'>
      <div className='row'>
        <div className='col-md-12'>
          <div className='wacthHead'>
            <h1>everyone's desires</h1>
            <span>Watches</span>
          </div>
        </div>
        <div className='col-md-12'>
          <div className='watchBtnContent'>
            <div className='watchBtnBg'>
              <div className='watchIcnon'>
                <BsSmartwatch />
              </div>
              <div className='watchName mt-2'>Rolex</div>
            </div>
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>{" "}
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>{" "}
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>{" "}
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>{" "}
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>{" "}
            <div className='watchBtnBg'>
              <div className='watchIcnon'>icon</div>
              <div className='watchName mt-2'>Rolex</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watches;
