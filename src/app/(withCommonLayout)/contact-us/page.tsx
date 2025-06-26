const ContactUsPage = () => {
  return (
    <>
      <div>
        <div className="container pt-40">
          <h1 className="py-4 font-bold text-xl text-center">
            If Contact With Us Send Detail
          </h1>
          <div className="shadow-xl p-6 rounded-lg bg-white ">
            <form>
              <div className="md:flex gap-6">
                <input
                  name="from_name"
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered   bg-white  border p-2 rounded-lg w-full md:mt-2"
                />
                <input
                  name="from_name"
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered  bg-white   border p-2 rounded-lg  w-full md:mt-2 mt-4"
                />
              </div>
              <div className="md:flex gap-6 mt-4">
                <input
                  name="from_name"
                  type="text"
                  placeholder="Phone"
                  className="input input-bordered  bg-white  w-full border p-2 rounded-lg   md:mt-2"
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Email"
                  className="input input-bordered  bg-white   w-full border p-2 rounded-lg   md:mt-2 mt-4"
                />
              </div>
              <div className="mt-4">
                <input
                  name="message"
                  type="text"
                  placeholder="Address"
                  className="input border p-2 rounded-lg   bg-white   input-bordered w-full "
                />
              </div>

              <div className="mt-10">
                <textarea
                  name="message"
                  className="textarea border p-2 rounded-lg  bg-white  textarea-bordered h-36 w-full"
                  placeholder="Message or description"
                ></textarea>
              </div>
            </form>
            <div className="mt-8 flex justify-center md:justify-end">
              <button className="btn">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
