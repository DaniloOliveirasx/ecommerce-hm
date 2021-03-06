import { Announcement } from "../../components/Announcement";
import { Category } from "../../components/Category";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { NewSletter } from "../../components/Newsletter";
import { ProductsItem } from "../../components/ProductsItem";
import { Slider } from "../../components/Slider";

export function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <ProductsItem />
      <NewSletter />
      <Footer />
    </>
  )
}