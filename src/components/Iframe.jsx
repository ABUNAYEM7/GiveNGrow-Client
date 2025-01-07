import thumbnail from "../assets/thumbnail.PNG";

const Iframe = () => {
  return (
    <div className="my-6 p-4">
      <h3 className="text-3xl font-bold text-primary mb-12 text-center">
        How Give&Grow Works
      </h3>
      <div className="w-full mx-auto h-[500px] rounded-xl relative group">
        <img
          className="w-11/12 mx-auto h-full object-cover rounded-xl transform group-hover:scale-105 transition-transform duration-300"
          src={thumbnail}
          alt="thumbnail"
        />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl">
          <button
            onClick={() => videoModal.showModal()}
            className="btn bg-secondary text-white hover:text-secondary"
          >
            Watch 1 minute Video
          </button>
        </div>
      </div>

      {/* modal */}
      <dialog id="videoModal" className="modal">
        <div className="modal-box  w-11/12 max-w-[1200px]">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-0 ">
              ✕
            </button>
          </form>
          <div className="relative w-full pt-[42.85%]  rounded-xl">
            <iframe
              src="https://www.youtube.com/embed/8EUGN4C33e8?si=IfOOosWdMsN_GEJn"
              title="How Give & Grow Works"
              className="absolute  top-0 left-0 w-full h-full border-0 rounded-xl"
            ></iframe>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Iframe;
