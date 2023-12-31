import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <center>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>مستندات - توضیحات کلی درباره بازی</p>
<br></br>
        <h2 className={styles.sectionHeadText}>معرفی نامه بازی هیدوسپیس</h2>
        <br></br>
      </motion.div>
</center>
<center>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
          سلام کاربران گرامی ما سازندگان سایت هیدوسپیس و بازی هیدوسپیس هستیم من سهند محمد رضایی مدیر سایت و تیم قادم هستم 
          بازی ساخته شده در دسته بندی اکشن و علمی است , این بازی با زبان برنامه نویسی 
          پایتون - جاوا اسکریپت - نود جی اس - تایپ اسکریت - دبیلیو اس ال - سی اس اس - تیل ویند - مانگو دی بی
          ساخته شده است بازی فوق موضوع اول شخصیتی است شما می توانید در قالب خانم , آقا یا سرباز که در یک محیطی با نام کرش هاوس قرار دارد فرد سعی می کند که خودش را نجات دهد
          در این محیط چهار نوع اسلحه و جعبه های مهمات و افزایش سلامتی شخصیت های بازی و برخی از ابزار های مهمی چون کلید و بعضی از اتاق های 
          بازی دارای جعبه هایی چون سوالات علمی نسبت به سن افراد است که از آنها پرسیده میشود و اگر فردی در زمان تعیین شده بتواند
            به سوالات جواب بدهد می تواند از هدایای جعبه استفاده کرده و در بروزرسانی های بعدی چون اسلحه ها و محیط
         های زیاد بازی و کاهش حجم بازی و کیفیت و صدا گذاری زیبا و امکان بازی کردن دونفره در بروزرسانی های بعدی امکان پذیر خواهد بود
      </motion.p>
      </center>
<br></br>
<br></br>
<hr></hr>
<br></br>
<br></br>
<center>
      <img src="https://sahand.storage.iran.liara.space/action-game.png" alt="hedospace"  height="450px" width="360px"></img>
      </center>
      <br></br>
      <br></br>
      <hr></hr>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
