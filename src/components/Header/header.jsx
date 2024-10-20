import React from 'react';
import ItemNavbar from '../navbaritem/item'
import LogoImage from "../../assets/images/logo.png";

const Header = () => {
  return (
    <div className='w-full h-12 bg-secondary text-white items-center flex justify-between'>
    <div className="Left w-[80%] h-full ps-[7rem] bg-third flex justify-between">
      <div className="Left-leftside w-fit h-full flex">
        <ItemNavbar logo={LogoImage}></ItemNavbar> 
        <ItemNavbar text="AUTRES EPREUVES"></ItemNavbar>
        <ItemNavbar text="DIFFUSEURES"></ItemNavbar>
        <ItemNavbar text="MEDIAS"></ItemNavbar>
        <ItemNavbar text="JEUX"></ItemNavbar>
      </div>
      <div className="Left-rightside w-fit h-full flex justify-end">
        <ItemNavbar text="TOUT OPERATEURS"></ItemNavbar>
        <ItemNavbar text="MONTOUR"></ItemNavbar>
        <ItemNavbar text="VIP"></ItemNavbar>
        <ItemNavbar text="MAGASINS"></ItemNavbar>
        <ItemNavbar text="BOUTIQUE"></ItemNavbar>
      </div>
    </div>
    <div className="Right w-[20%] h-full  pe-[7rem] "></div>
</div>
  );
};

export default Header;