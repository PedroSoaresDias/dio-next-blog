import { getGlobalData } from '../../../utils/global-data';
import { getPostById } from '../../../services/api';

import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Layout, { GradientBackground } from '../../../components/Layout';

export default async function PostPage({ params: { id }}: { params: { id: string }}) {
  const post: Post = await getPostById(id);
  const globalData = getGlobalData();

  return (
    <Layout>
      <Header name={globalData.name} />
      <article key={post.id} className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-black text-center mb-12">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-xl mb-4 text-black dark:text-white">{post.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">
            {post.body}
          </article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}