<>

<div
style={{ width: isOpen ? "400px" : "80px" }}
className={classNames(
{ "px-7 min-w-[265px] max-w-[265px]": isOpen },
{ "flex-col items-center align-center justify-center": !isOpen },
"min-w-[80px] pt-7 bg-primary-100 border-e-[1px] ease-in-out transition-all duration-300 overflow-hidden "
)} >
<div
className={classNames(
{ "w-12 ms-4": !isOpen },
"flex h-12 px-3 rounded-xl justify-between items-center bg-white shadow-sm"
)} >
{isOpen && (
<div className="flex items-center gap-2">
<div className="flex rounded-full h-7 w-7 bg-primary-500 text-white justify-center items-center bg-[url(https://plus.unsplash.com/premium_photo-1713788509783-6f674cb19981?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-fit"></div>
<p
className={classNames(
"p-0 font-medium",
{ "opacity-0": !isOpen, "opacity-100": isOpen },
"transition-opacity duration-300"
)} >
Admin's Space
</p>
</div>
)}
<div onClick={switchOpenHandle}>
<MenuIcon className="w-6 hover:bg-primary-100 cursor-pointer active:bg-white" />
</div>
</div>
<div>
{isOpen ? (
<p className="pt-7 text-sm text-primary-150 pb-5">General</p>
) : (
<div className={classNames({ "my-7": !isOpen })}> </div>
)}

</div>
{isOpen && (

)}

</div>
</>
