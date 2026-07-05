import Filters from "../../components/Filters/Filters"
import Hero from "../../components/Hero/Hero"
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    async function testApi() {
      try {
        const response = await fetch(
          "https://demohotelsapi.pythonanywhere.com/hotels/"
        );
        const data = await response.json();

        console.log("Data:", data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    }

    testApi();
  }, []);

  return (
    <div>
      <Hero />
      <Filters />
    </div>
  );
};

export default Home;