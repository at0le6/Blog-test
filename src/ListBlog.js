import React from 'react';

function ListBlog({props}) {
    console.log(props);
  return (<div className='container'>
      <div className='row' style={{justifyContent:"center"}}>
      {props.map(e=>(
              <div key={e.title} className="col-md-4 d-flex justify-content-md-end justify-content-center m-4" style={{width:"18rem"}}>
          <div className="card-body">
            <h5 className="card-title">{e.title}</h5>
            <p className="card-text">{e.body}</p>
          </div>
          </div>
      ))}
      </div>
  </div>);
}

export default ListBlog;
