import React from "react";

const NewProduct = () => {
  return (
    <div className="p-4">
      <form method="post" action="/products/new">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" required/>
        </div>
          <label>Description</label>
        <div className="form-group">
          <textarea rows="10" name="description" />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
