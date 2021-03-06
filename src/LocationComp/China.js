import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class China extends Component {
  render() {
    return (
        <div className="section"> <br /><br /><br />
            <div className="section-white container">
                <div className="row">
                    <div className="title-area"> <br /><br />
                        <h2>China</h2>
                        <div className="separator separator-danger">✻</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-8">
                        <h4 className="glico-color"><b>Shanghai Ezaki Glico Co., Ltd.</b></h4> <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1">
                        <p className="description-custom-gray">Foundation</p> <br />
                        <p className="description-custom-gray">Business Summary</p> <br />
                        <p className="description-custom-gray">Capital Fund</p> <br />
                        <p className="description-custom-gray">Main Products</p> <br />
                        <p className="description-custom-gray">Location</p>
                    </div>
                    <div className="col-md-4">
                        <p className="description-custom">September 1995</p> <br />
                        <p className="description-custom">Manufacturing and distribution of snacks and chocolates</p> <br />
                        <p className="description-custom">138 million Chinese Yuan (Ezaki Glico make a 100% investment)</p> <br />
                        <p className="description-custom">Pocky, Pejoy, PRETZ.etc</p> <br /><br />
                        <p className="description-custom">Shanghai</p>
                    </div>
                    <div className="col-md-3">
                        <img alt="China" src="https://www.glico.com/assets/materials/pic_global_photo_07.jpg" width="270" /> <br />
                    </div>
                </div> <br /><br /><br /><br />
            </div>
        </div>
    );
  }
}

export default China;
