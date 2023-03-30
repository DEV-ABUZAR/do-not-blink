import React from "react";


function Cards() {
  return (
    <div className="container" style={{marginTop:"30px"}}>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-body"style={{backgroundImage: "url('https://www.thebalancemoney.com/thmb/YHFZzgAho3A5YScHgxhbxSEbqp4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BusinessPlanning-568d655e3df78ccc156088dc.jpg')", backgroundSize: 'cover' }}>
              <h5 className="card-title">OUR FEATURES</h5>
              <p className="card-text">
              <h3 style={{marginLeft:"20px"}}>   Made Planning  Easy</h3>
        <p>Our event planner app makes it easy to plan and organize any type of event,
             from weddings and corporate events to birthday parties and fundraisers. 
            You can create custom event timelines, manage guest lists, track RSVPs, and much more.</p>
              </p>
             
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="card">
          <div className="card-body"style={{backgroundImage: "url('https://yourplanningpartners.com/wp-content/uploads/Budget-Planning-800x400.jpg')", backgroundSize: 'cover' }}>
              <h5 className="card-title"> Budget Management</h5>
              <p className="card-text">
              <h3 style={{marginLeft:"20px"}}>  Keep your event on track</h3>
        <p>Our event planner app makes it easy to plan and organize any type of event,
             from weddings and corporate events to birthday parties and fundraisers. 
            You can create custom event timelines, manage guest lists, track RSVPs, and much more
        </p>
              </p>
             
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="card">
          <div className="card-body"style={{backgroundImage: "url('https://www.eventbrite.com/blog/wp-content/uploads/2022/04/Future-of-Attendee-Experience-1-768x333.png')", backgroundSize: 'cover' }}>
              <h5 className="card-title">Attendee Engagement</h5>
              <p className="card-text">
              <h3 style={{marginLeft:"20px"}}>   </h3>
        <p>OSocial Media Integration: Integrate social media into your event to promote engagement and expand your reach.
            Encourage attendees to share their experiences and use event-specific hashtags.ive Polling: Engage your audience and get instant feedback through live polling.
          </p>
              </p>
             
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="card">
          <div className="card-body"style={{backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz4vFZ8M7OOAiN1BxKzrjt_zl87WhW9A-LdQ&usqp=CAU') " , backgroundSize: 'cover' }}>
              <h5 className="card-title">Vendor Managemen</h5>
              <p className="card-text">
          
        <p>OSocial Media Integration: Integrate social media into your event to promote engagement and expand your reach.
            Encourage attendees to share their experiences and use event-specific hashtags.ive Polling: Engage your audience and get instant feedback through live polling.
          </p>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
