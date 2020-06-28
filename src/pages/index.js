import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Services from "../components/services";
import Prices from "../components/prices";
import GalleryServices from "../components/gallery";

/**
 * Todo:
 * 1) Gallery component - https://www.gatsbyjs.org/packages/gatsby-theme-gallery/
 * 2) Pricing - check the text on Viber
 * 3)
 */

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <section>
        <Services />
        <Prices />
        <GalleryServices />
      </section>
    </Layout>
  );
}

export default IndexPage;
