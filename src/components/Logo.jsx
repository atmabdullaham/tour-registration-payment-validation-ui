import logo from "../assets/shibir-logo.png";

const Logo = () => {
  return (
    <div className="cursor-pointer flex items-center gap-2 group">
      <div className="relative flex items-center justify-center p-1.5 bg-white rounded-xl shadow-[0_4px_15px_-3px_rgba(0,163,223,0.2)] border border-blue-50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_8px_20px_-5px_rgba(0,163,223,0.3)]">
        <img
          src={logo}
          className="w-8 h-8 md:w-9 md:h-9 object-contain drop-shadow-sm"
          alt="Logo"
        />
        <div className="absolute inset-0 rounded-xl ring-2 ring-[#00A3DF] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
      <div className="flex flex-col justify-center pt-1">
        <h2 className="text-xl md:text-2xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#173083] to-[#00A3DF] leading-none mb-1">
          SHIBIR
        </h2>
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-[2px] bg-[#E3000F] rounded-full"></span>
          <h3 className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] text-slate-600 uppercase leading-none">
            CCN
          </h3>
          <span className="w-2 h-[2px] bg-[#E3000F] rounded-full"></span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
