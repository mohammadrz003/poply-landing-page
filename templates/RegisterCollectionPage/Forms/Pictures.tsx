import { AiOutlineCloudUpload } from "react-icons/ai";

type Props = {};

const Pictures = (props: Props) => {
  return (
    <div className="col-span-11 grid-row-1 lg:grid-row-unset lg:col-span-5 rounded-lg w-full text-slate-950 space-y-7 mb-10">
      <div className="w-full">
        <h5 className="text-slate-200 mb-3">Cover Image</h5>
        <div className="relative h-48 rounded-lg border-dashed border-2 border-slate-700 flex justify-center items-center">
          <div className="absolute">
            <div className="flex flex-col items-center">
              <AiOutlineCloudUpload className="text-white text-3xl" />
              <span className="block text-gray-400 font-normal text-xs">
                PNG, GIF, WEBP
              </span>
            </div>
          </div>

          <input type="file" className="h-full w-full opacity-0" name="" />
        </div>
      </div>
      <div className="w-full">
        <h5 className="text-slate-200 mb-3">Profile Image</h5>
        <div className="relative w-48 aspect-square rounded-full border-dashed border-2 border-slate-700 flex justify-center items-center">
          <div className="absolute">
            <div className="flex flex-col items-center">
              <AiOutlineCloudUpload className="text-white text-3xl" />
              <span className="block text-gray-400 font-normal text-xs">
                PNG, GIF, WEBP
              </span>
            </div>
          </div>

          <input type="file" className="h-full w-full opacity-0" name="" />
        </div>
      </div>
    </div>
  );
};

export default Pictures;
