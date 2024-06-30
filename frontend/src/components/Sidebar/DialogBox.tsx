const DialogBox = () => {
  return (
    <div className="mt-16  bg-primary-500 rounded-3xl p-4 text-white flex flex-col justify-between border-2 border-white shadow-sm">
      <h3 className="pb-2 font-medium text-lg">Upgrade Now!</h3>
      <p className="pb-3">Explore more benefits with the premium plan.</p>
      <button className="w-full rounded-3xl bg-white text-primary-500 h-fit py-3 hover:bg-primary-100 active:bg-white font-medium ">
        $120/month
      </button>
    </div>
  );
};

export default DialogBox;
