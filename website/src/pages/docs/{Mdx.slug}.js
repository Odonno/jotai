import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Jotai } from '../../components/jotai';
import { Layout } from '../../components/layout';
import { Meta } from '../../components/meta';

export default function DocsPage({ data }) {
  const { frontmatter, body } = data.mdx;
  const { title } = frontmatter;

  return (
    <Layout showDocs>
      <div className="mb-4 lg:hidden">
        <Jotai isDocsPage small />
      </div>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  );
}

export const Head = ({ data }) => {
  const { slug, frontmatter } = data.mdx;
  const { title, description } = frontmatter;
  const uri = `docs/${slug}`;

  return <Meta title={title} description={description} uri={uri} />;
};

export const pageQuery = graphql`
  query PageQuery($slug: String) {
    mdx(slug: { eq: $slug }) {
      slug
      frontmatter {
        title
        description
      }
      body
    }
  }
`;
