import { useState } from "react";


const Inquiry = () => {
    const [ contactInfo , setContactInfo ] = useState({
        name: "",
        email: "",
        remarks: "",
    });

    const onChange = (e) => {
        setContactInfo({ ...contactInfo, [e.target.id]: e.target.value })
    }

        const onSubmit = (e) => {
            e.preventDefault();
            console.log(contactInfo)
        }
    return (
      <form className="mt-2">
        <div className="form-groups">
          <label htmlFor="">Name </label>
          <input
            type="text"
            id="name"
            className="form-control"
            placeholder="name"
            value={contactInfo.name}
            onChange={onChange}
          />
        </div>
        <div className="form-groups">
          <label htmlFor="">Email Adress </label>
          <input
            type="text"
            id="email"
            className="form-control"
            placeholder="email"
            value={contactInfo.name}
            onChange={onChange}
          />
        </div>
        <div className="form-groups">
          <label htmlFor="">Remarks </label>
          <input
            type="text"
            id="remarks"
            className="form-control"
            placeholder="remarks"
            value={contactInfo.remarks}
            onChange={onChange}
          />
        </div>
        <button
          className="btn btn-primary mt-2"
          disabled={!contactInfo.name || !contactInfo.email}
          onClick={onSubmit}
        >
          Submit
        </button>
      </form>
    );
}
 
export default Inquiry;