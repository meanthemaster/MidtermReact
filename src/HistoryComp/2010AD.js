import React, { Component } from 'react';
import '../css/bootstrap.css';
import '../css/gaia.css';

class AD2010 extends Component {
  render() {
    return (
        <div className="row">
                    <div className="col-md-2">
                    </div>
                    <div className="col-md-1 text-center">
                        <p className="description-custom">2010</p>
                    </div>
                    <div className="col-md-1">
                        <center><div className="vertical-line circle"></div></center>
                    </div>
                    <div className="col-md-6">
                        <p className="description-custom">Glico Wagon covered the whole nation from Hokkaido to Okinawa.</p>
                        <center><img alt="history36" src="https://www.glico.com/assets/materials/pic_history_36.jpg"/></center>
                    </div>
        </div>
    );
  }
}

export default AD2010;
