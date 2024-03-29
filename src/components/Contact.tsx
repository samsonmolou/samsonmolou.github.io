import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { whatsapp } from "../assets";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setLoading(true);

    emailjs.send(
      "service_1vaslq8",
      "template_h33j1jp",
      {
        from_name: form.name,
        to_name: "Samson",
        from_email: form.email,
        to_email: "samsonmolou@gmail.com",
        message: form.message
      },
      "i1WhfflgVMmyW4l8H"
    ).then(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
    }), (error: any) => {
      setLoading(false);

      console.log(error);

      alert("Something went wrong");
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="flex flex-row justify-center items-center mt-10">
          <img src={whatsapp} alt="whatsapp" className="w-6 h-6 rounded-full object-cover mr-2" />{" "}
          <p className={styles.sectionSubText}> {" "} (+225) 07 49 63 12 23</p>
        </div>


        <div className="flex flex-row justify-between items-center mt-8">
          <div className="sm:w-80 w-40 sm:h-1 h-1 bg-gradient-to-r from-[#804dee]" />
          <p className={styles.sectionSubText}>OR</p>
          <div className="sm:w-80 w-40 sm:h-1 h-1 bg-gradient-to-l from-[#804dee]" />

        </div>

        <form
          // @ts-ignore
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg  border-none font-medium" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg  border-none font-medium" />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg  border-none font-medium" />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>

        </form>

      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
