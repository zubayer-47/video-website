import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImage from "../../assets/lws.svg";
import searchImage from "../../assets/search.svg";
import { resetFilters } from "../../features/filter/filterSlice";
import Search from "./Search";

export default function Navbar() {
  const dispatch = useDispatch();
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <Link onClick={dispatch(resetFilters())} to="/">
          <img className="h-10" src={logoImage} alt="Learn with Sumit" />
        </Link>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Search />
          <img
            className="inline h-4 cursor-pointer"
            src={searchImage}
            alt="Search"
          />
        </div>
      </div>
    </nav>
  );
}
