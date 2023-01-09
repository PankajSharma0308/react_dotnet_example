import React from "react";

const CreateUser = ({ onChangeForm, createUser }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7 mrgnbtm">
          <h2>Create User</h2>
          <form>
            <div className="row">
              <div className="form-group col-md-6">
                <label
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  placeholder="First Name"
                />
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="exampleInputPassword1"> Last Name </label>
                <input
                  type="text"
                  onChange={(e) => onChangeForm(e)}
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="Last Name"
                />
              </div>

              <div className="row">
                <div className="form-group col-md-12">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input
                    type="text"
                    onChange={(e) => onChangeForm(e)}
                    className="form-control"
                    name="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={(e) => createUser()}
                className="btn btn-danger"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
