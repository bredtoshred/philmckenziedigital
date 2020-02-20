import React from "react";
// import Slider from "react-slick";
import Masonry from "react-masonry-component";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <article className="sheet">
      <HelmetDatoCms seo={data.datoCmsWork.seoMetaTags} />
      <div className="sheet__inner">
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsWork.coverImage.fluid} />
        </div>
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        {/* <p className="sheet__lead">{data.datoCmsWork.excerpt}</p> */}
        <p className="sheet__lead">tools used: {data.datoCmsWork.tools}</p>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html
          }}
        />
      </div>
      {/* <div className="sheet__slider"> */}
      <Masonry className="showcase">
        {data.datoCmsWork.gallery.map(({ fluid }) => (
          <img
            className="showcase__item"
            alt={data.datoCmsWork.title}
            key={fluid.src}
            src={fluid.src}
          />
        ))}
      </Masonry>
      {/* </div> */}
    </article>
  </Layout>
);

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsWork(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      excerpt
      tools
      gallery {
        fluid(maxWidth: 200, imgixParams: { fm: "jpg", auto: "compress" }) {
          src
        }
      }
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      coverImage {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`;
