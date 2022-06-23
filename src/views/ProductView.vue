<script>
import ProductSummary from "@/components/ProductSummary.vue";
import ProductPromo from "@/components/ProductPromo.vue";
import AboutProduct from "@/components/AboutProduct.vue";
import product1 from "@/assets/products/product1.svg?url";
import product2 from "@/assets/products/product2.svg?url";
import product3 from "@/assets/products/product3.svg?url";
import lms1 from "@/assets/lms1.png";
import lms2 from "@/assets/lms2.png";

export default {
  components: {
    ProductSummary,
    ProductPromo,
    AboutProduct,
  },
  data() {
    return {
      productPromoTitle: "The LMS that's built for every need",
      productPromoDetails: [
        {
          photo: lms1,
          title: "General Education",
          description:
            "Transform your learning digitally. Streamline all your school processes in one platform made especially for students, for teachers, and for parents.",
          isReversed: false,
        },
        {
          photo: lms2,
          title: "Professional Training",
          description:
            "Bringing you a platform that provides end to end solution in the training process for your employees, customers, or partners that allows.",
          isReversed: true,
        },
      ],
      productSummaryTitle: "Learn without Limits",
      productSummarySubtext: "OUR PRODUCTS",
      productList: [
        {
          photo: product1,
          title: "Educat LMS",
          description:
            "A Learning Management System and content library that offers a variety of ways on how to learn through blended learning.",
        },
        {
          photo: product2,
          title: "Educat Library",
          description:
            "An online library that contains Digital Modules, Worksheets and Assessments aligned with DepEd’s K to 12 Curriculum.",
        },
        {
          photo: product3,
          title: "Educat Rover",
          description:
            "An offline solution run by mini-computers that are equipped with wireless local area network for contactless file transfers.",
        },
      ],
      demographList: [
        { name: "Learning Materials Donated", count: 1200, counter: 0 },
        { name: "LMS Users", count: 5500, counter: 0 },
        { name: "Trained Professionals", count: 3000, counter: 0 },
        { name: "Lorem Ipsum", count: 1200, counter: 0 },
      ],
    };
  },
};
</script>

<template>
  <ProductSummary
    :productSummaryTitle="productSummaryTitle"
    :productSummarySubtext="productSummarySubtext"
    :productList="productList"
  />
  <ProductPromo
    :productPromoTitle="productPromoTitle"
    :productPromoDetails="productPromoDetails"
  />
  <AboutProduct :demographList="demographList" />
</template>
