import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
   <div>
    <section>
      <Banner/>
    </section>
    <section>
      <About/>
    </section>
    <section>
      <Testimonial/>
    </section>
    
   </div>
  );
}
