import img1 from "../assets/img/dest1.jpg";
import img2 from "../assets/img/dest2.jpg";
import img3 from "../assets/img/dest3.jpg";
import img4 from "../assets/img/dest4.jpg";
import img5 from "../assets/img/dest5.jpg";
import img6 from "../assets/img/dest6.jpg";

import DestinationCard from "../layouts/DestinationCard";

const Destination = () => {
  return (
    <div className=" min-h-screen flex pb-8 flex-col justify-center md:mx-32 mx-5">
      <h1 className=" font-medium text-center text-4xl lg:mt-0 mt-16">
        Our Products & Services
      </h1>

      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img1}
          title="IT Solutions"
          para="With a strong focus on innovation, customer satisfaction, and quality, we have established ourselves as a trusted partner for businesses seeking reliable and efficient IT solutions."
        />
        <DestinationCard
          img={img2}
          title="Stationery & Printing"
          para="We aim to meet the stationery needs of businesses, and educational institutions by providing a vast selection of office supplies, paper products,  and printing equipment."
        />
        <DestinationCard
          img={img3}
          title="Construction"
          para="We strive to provide comprehensive construction solutions, including project management, engineering, site preparation, construction, and post-construction services."
        />
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 mt-14">
        <DestinationCard
          img={img4}
          title="Corporate Wear"
          para="With the importance of professional attire in the corporate world. Our objective is to offer a wide range of corporate wear options, including uniforms, and accessories."
        />
        <DestinationCard
          img={img5}
          title="Furniture"
          para="Our objective is to provide innovative functional solutions for both commercial and residential spaces. We offer a diverse range of furniture products and custom designs"
        />
        <DestinationCard
          img={img6}
          title="Tools & Hardware"
          para="We aim to be a reliable supplier of tools and hardware products for professionals, and industrial sectors. A comprehensive range of high-quality tools,  and equipment."
        />
      </div>
    </div>
  );
};

export default Destination;
