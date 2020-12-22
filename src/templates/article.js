import React from "react";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout_1";

const Article = ({ data }) => {
  return (
    <Layout>
      <Link to="/">Go back to index page</Link>
      <div>
        <h2>{data.article.title}</h2>
        {data.article.heroImage ? (
          <Img fluid={data.article.heroImage.fluid} />
        ) : (
          <div>Image can't be displayed</div>
        )}
        <div dangerouslySetInnerHTML={{ __html: data.article.body.body }} />
      </div>
    </Layout>
  );
};

export default Article;

export const query = graphql`
  query($slug: String!) {
    article: contentfulBlogPost(slug: { eq: $slug }) {
      title
      body {
        body
      }
      heroImage {
        fluid(maxWidth: 960, quality: 90) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`;
