import Card from "@/components/Card";
import Nav from "@/components/Nav";
import { FaPlus } from "react-icons/fa";

export default function Home() {
  const cards = [
    {img:'user1.png',text: 'Total Groom and bride’s biodata ',num:'6,140'},
    {img:'user3.png',text: 'Total Grooms biodata ',num:'2,524'},
    {img:'user2.png',text: 'Total Brides biodata  ',num:'3,724'},
    {img:'user4.png',text: 'Total successful marriages ',num:'1,526'},
  ]
  return (
    <div className="  md:px-[100px] px-[30px] py-[10px] w-full min-h-screen">
      <Nav />
      <div
        style={{
          backgroundImage: "url(/bg.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className=" w-full h-[350px] mt-[50px]  rounded-tl-[50px] rounded-br-[50px] flex flex-col justify-center items-center text-center"
      >
        <h1 className="text-blue font-black text-[70px] w-[70%] leading-none">
          Bangladeshi Islamic <span className=" text-pink ">Matrimony</span>
        </h1>
        <p className=" text-[20px] text-gray mt-3">
          It is now easy to find a religious partner in your area
        </p>
      </div>
      <div className=" w-full border border-pink rounded-[20px] h-[150px] mt-5 flex flex-col justify-center items-center text-center">
        <p className=" text-gray text-[25px]">
          “Whoever desires Paradise, let him seek it through marriage.”
        </p>
        <p className=" text-pink text-[22px]">(Musnad Ahmad 18478)</p>
      </div>
      <div className=" w-full h-[150px] bg-pink/[20%] rounded-[20px] mt-[100px] flex justify-between items-center px-[70px]">
        <div>
          <h1>I am looking for</h1>
          <input type="text" className=" border-black  outline-none" />
        </div>
        <div>
          <h1>Marital status</h1>
          <input type="text" className=" border-black  outline-none" />
        </div>
        <div>
          <h1>Permenant Address</h1>
          <input type="text" className=" border-black  outline-none" />
        </div>

        <button className=" gradient rounded-[8px] text-white font-bold px-[25px] py-[7px]">
          Search
        </button>
      </div>
      <div className=" w-full text-center mt-[100px] flex flex-col justify-center items-center">
        <h1 className=" text-violet text-[50px] font-black">
          {" "}
          <span className=" text-blue">Create Biodata</span> in Nisbaah.com for
          free
        </h1>
        <button className="gradient px-[100px] py-[30px] text-[30px] font-black text-white rounded-[30px] mt-4 flex items-center gap-3">
          <FaPlus className="text-[30px] text-white " /> Create your Biodata
        </button>
      </div>
      <div className=" mt-[100px] w-full">
        <h1 className=" text-violet text-[50px] font-black text-center">
          <span className=" text-blue">Nisbaah.com</span> user statistics
        </h1>
        <div className="flex justify-between items-center flex-wrap mt-5">
          {cards.map((val,index) => (
            <Card key={index} img={val.img} text={val.text} num={val.num}/>
          ))}
        </div>
      </div>
    </div>
  );
}
