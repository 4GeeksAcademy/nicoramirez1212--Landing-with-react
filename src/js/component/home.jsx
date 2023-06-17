import React from "react";

const Content = () => {
	return (
	<>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark d-flex">
      <div className="container">
        <div className="container">
        <a className="navbar-brand" href="#">Start Bootstrap</a>
      </div>
      <div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
      </ul>
      </div>
      </div>
    </nav>
    <div className="container">
      <div className="container-fluid text-bg-light my-1 pt-1 pb-5 border rounded-2">
        <h1 className="display-2">A Warm Welcome!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum veritatis impedit odit ab vitae aut explicabo temporibus dolore, earum consequuntur unde ipsa quis cum tenetur exercitationem placeat consectetur aperiam voluptas?</p>
        <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
      </div>
      <div className="card-group text-center my-4">
        <div className="card me-2 border rounded-2">
          <img src="http://via.placeholder.com/500x325" class="card-img-top rounded-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex cum dolore eveniet tempora nisi, laudantium nihil? Porro aliquid nihil hic iure laudantium, veniam, laborum, deleniti amet magnam architecto fugit mollitia!</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
        <div className="card mx-2 border rounded-2">
          <img src="http://via.placeholder.com/500x325" class="card-img-top rounded-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex cum dolore eveniet tempora nisi, laudantium nihil? Porro aliquid nihil hic iure laudantium, veniam, laborum, deleniti amet magnam architecto fugit mollitia!</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
        <div className="card mx-2 border rounded-2">
          <img src="http://via.placeholder.com/500x325" class="card-img-top rounded-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex cum dolore eveniet tempora nisi, laudantium nihil? Porro aliquid nihil hic iure laudantium, veniam, laborum, deleniti amet magnam architecto fugit mollitia!</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
        <div className="card ms-2 border rounded-2">
          <img src="http://via.placeholder.com/500x325" class="card-img-top rounded-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex cum dolore eveniet tempora nisi, laudantium nihil? Porro aliquid nihil hic iure laudantium, veniam, laborum, deleniti amet magnam architecto fugit mollitia!</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Find Out More!</button>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-dark bg-dark p-5 text-light d-flex justify-content-center">
      <p>Copyright © Nicolas Ramirez 2023</p>
    </nav>
    </>
	);
};

export default Content;