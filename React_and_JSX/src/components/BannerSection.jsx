export default function BannerSection() {
    return (
        <div className="banner_section layout_padding">
        <div className="container">
           <div id="main_slider" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                 <div className="carousel-item active">
                    <div className="row">
                       <div className="col-sm-12">
                          <div className="banner_taital">
                             <h1 className="outstanding_text">Outstanding</h1>
                             <h1 className="coffee_text">Coffee Shop</h1>
                             <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                             <div className="learnmore_bt"><a href="#">Learn More</a></div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="carousel-item">
                    <div className="row">
                       <div className="col-sm-12">
                          <div className="banner_taital">
                             <h1 className="outstanding_text">Outstanding </h1>
                             <h1 className="coffee_text">Coffee Shop</h1>
                             <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                             <div className="learnmore_bt"><a href="#">Learn More</a></div>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div className="carousel-item">
                    <div className="row">
                       <div className="col-sm-12">
                          <div className="banner_taital">
                             <h1 className="outstanding_text">Outstanding </h1>
                             <h1 className="coffee_text">Coffee Shop</h1>
                             <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, </p>
                             <div className="learnmore_bt"><a href="#">Learn More</a></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
              <a className="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
              <i className="fa fa-angle-left"></i>
              </a>
              <a className="carousel-control-next" href="#main_slider" role="button" data-slide="next">
              <i className="fa fa-angle-right"></i>
              </a>
           </div>
        </div>
     </div>

    );
}