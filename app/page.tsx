import Image from 'next/image';

const navigation = [
  ['Publications', '#publications'],
];

type Publication = {
  title: string;
  authors: string[];
  arxiv?: string;
  manuscript?: string;
  journal?: {
    citation: string;
    url: string;
  };
};

const preprints: Publication[] = [
  {
    title: 'Superlinear lower bounds for monochromatic path partitions',
    authors: ['Heng Li', 'Lanchao Wang'],
    arxiv: 'https://arxiv.org/abs/2608.09895',
  },
  {
    title: 'Forcing quasirandomness via rooted F-densities',
    authors: ['Heng Li', 'Xizhi Liu'],
    arxiv: 'https://arxiv.org/abs/2608.08679',
  },
  {
    title: 'Intervals of uniform Turán densities',
    authors: ['Heng Li', 'Xizhi Liu', 'Oleg Pikhurko'],
    arxiv: 'https://arxiv.org/abs/2608.04790',
  },
  {
    title: 'Nearly sharp bounds for lattice coverings by convex bodies',
    authors: ['Heng Li', 'Xizhi Liu'],
    arxiv: 'https://arxiv.org/abs/2607.28429',
  },
  {
    title: 'A higher-order clique density theorem',
    authors: ['Heng Li', 'Hong Liu', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2607.06545',
  },
  {
    title: "Strong counterexamples to Mubayi's supersaturation conjecture in every uniformity",
    authors: ['Heng Li', 'Hong Liu', 'Xizhi Liu', 'Jing Wang'],
    arxiv: 'https://arxiv.org/abs/2606.26735',
  },
  {
    title: 'Sharp bounds for minimal dependencies of linear-form powers',
    authors: ['Heng Li', 'Xizhi Liu'],
    arxiv: 'https://arxiv.org/abs/2606.24349',
  },
  {
    title: 'On a hypergraph Turán problem of Balogh–Bohman–Bollobás–Zhao',
    authors: ['Heng Li', 'Jie Ma', 'Tianhen Wang', 'Yixiao Zhang', 'Tianming Zhu'],
    arxiv: 'https://arxiv.org/abs/2606.12133',
  },
  {
    title: 'Physical-space scarring in generic Bunimovich stadia',
    authors: ['Heng Li', 'Xizhi Liu'],
    arxiv: 'https://arxiv.org/abs/2606.02426',
  },
  {
    title: "On Mubayi's polynomial-ideal conjecture and a hypergraph Turán theorem",
    authors: ['Heng Li', 'Xizhi Liu'],
    arxiv: 'https://arxiv.org/abs/2605.24507',
  },
  {
    title: 'A single 3-graph with infinite stability number',
    authors: ['Heng Li', 'Xizhi Liu'],
    arxiv: 'https://arxiv.org/abs/2605.21877',
  },
  {
    title: 'Hypergraphs with irrational Turán density and many extremal configurations',
    authors: ['Jianfeng Hou', 'Heng Li', 'Guanghui Wang', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2308.09382',
  },
];

const researchNotes: Publication[] = [
  {
    title: 'On the spectrum of minimum ℓ-degree Turán densities',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/On%20the%20spectrum%20of%20minimum%20ell-degree%20Turan%20densities.pdf',
  },
  {
    title: 'Turing universality, computability, and incompleteness in hypergraph Turán theory',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/Turing%20universality%2C%20computability%2C%20and%20incompleteness%20in%20hypergraph%20Turan%20theory.pdf',
  },
  {
    title: 'A finite family with transcendental uniform Turán density',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/A%20finite%20family%20with%20transcendental%20uniform%20Turan%20density.pdf',
  },
  {
    title: 'Undecidability in uniform Turán densities',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/Undecidability%20in%20Uniform%20Turan%20Densities.pdf',
  },
  {
    title: 'Gaps between Turán densities for r-graphs on r + 1 vertices',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/Gaps%20between%20Turan%20densities%20for%20r-graphs%20on%20r%2B1%20vertices.pdf',
  },
  {
    title: 'On the VC-dimension of Erdős–Rényi random graphs',
    authors: ['Xizhi Liu', 'Heng Li'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/On%20the%20VC-dimension%20of%20Erdos-Renyi%20random%20graphs.pdf',
  },
  {
    title: 'Transcendence and undecidability for ℓ-degree Turán densities',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/Transcendence%20and%20undecidability%20for%20ell-degree%20Turan%20densities.pdf',
  },
  {
    title: 'Transcendence and undecidability in hypergraph Turán densities',
    authors: ['Heng Li', 'Hong Liu', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/Transcendence%20and%20Undecidability%20in%20Hypergraph%20Turan%20Densities.pdf',
  },
  {
    title: 'The anti-supersaturation problem',
    authors: ['Heng Li', 'Xizhi Liu', 'Jiasheng Zeng'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/The%20anti-supersaturation%20problem.pdf',
  },
  {
    title: "A note on Bukh's construction of extremal graphs without small bicliques",
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/A%20note%20on%20Bukh%27s%20construction%20of%20extremal%20graphs%20without%20small%20bicliques.pdf',
  },
  {
    title: 'Logarithmic colourings, monomial shrinking targets, and product-configuration obstructions',
    authors: ['Heng Li', 'Xizhi Liu'],
    manuscript: 'https://github.com/xliu2022/xliu2022.github.io/blob/main/Unpolished_Manuscripts/Logarithmic%2C%20high-density%20fibre%2C%20and%20finite-fibre%20obstructions%20to%20infinite%20product%20configurations.pdf',
  },
];

const acceptedPublications: Publication[] = [
  {
    title: 'Transversal Hamilton cycles in digraph collections',
    authors: ['Yangyang Cheng', 'Heng Li', 'Wanting Sun', 'Guanghui Wang'],
    arxiv: 'https://arxiv.org/abs/2501.00998',
    journal: {
      citation: 'Combinatorics, Probability and Computing, First View, 1–57 (2026)',
      url: 'https://doi.org/10.1017/S0963548326100388',
    },
  },
  {
    title: 'On the boundedness of degenerate hypergraphs',
    authors: ['Jianfeng Hou', 'Caiyun Hu', 'Heng Li', 'Xizhi Liu', 'Caihong Yang', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2407.00427',
    journal: {
      citation: 'Acta Mathematica Sinica, English Series 42(2), 464–480 (2026)',
      url: 'https://doi.org/10.1007/s10114-026-4419-z',
    },
  },
  {
    title: 'Many vertex-disjoint even cycles of fixed length in a graph',
    authors: ['Jianfeng Hou', 'Caiyun Hu', 'Heng Li', 'Xizhi Liu', 'Caihong Yang', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2311.16189',
    journal: {
      citation: 'Journal of Graph Theory 111(3), 67–77 (2026)',
      url: 'https://doi.org/10.1002/jgt.70003',
    },
  },
  {
    title: 'Infinitely many accumulation points of codegree Turán densities',
    authors: ['Heng Li', 'Weichan Liu', 'Bjarne Schülke', 'Wanting Sun'],
    arxiv: 'https://arxiv.org/abs/2502.13485',
    journal: {
      citation: 'Combinatorial Theory, to appear',
      url: 'https://escholarship.org/uc/combinatorial_theory/acceptedPapers',
    },
  },
  {
    title: 'Toward a density Corrádi–Hajnal theorem for degenerate hypergraphs',
    authors: ['Jianfeng Hou', 'Caiyun Hu', 'Heng Li', 'Xizhi Liu', 'Caihong Yang', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2311.15172',
    journal: {
      citation: 'Journal of Combinatorial Theory, Series B 172, 221–262 (2025)',
      url: 'https://doi.org/10.1016/j.jctb.2025.01.001',
    },
  },
  {
    title: 'A step towards a general density Corrádi–Hajnal theorem',
    authors: ['Jianfeng Hou', 'Heng Li', 'Xizhi Liu', 'Long-Tu Yuan', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2302.09849',
    journal: {
      citation: 'Canadian Journal of Mathematics, First View, 1–36 (2025)',
      url: 'https://doi.org/10.4153/S0008414X25000197',
    },
  },
  {
    title: 'Two stability theorems for 𝒦ₗ₊₁ʳ-saturated hypergraphs',
    authors: ['Jianfeng Hou', 'Heng Li', 'Caihong Yang', 'Qinghou Zeng', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2211.02838',
    journal: {
      citation: 'Journal of Graph Theory 109(4), 492–504 (2025)',
      url: 'https://doi.org/10.1002/jgt.23241',
    },
  },
  {
    title: 'Extremal graphs for the suspension of edge-critical graphs',
    authors: ['Jianfeng Hou', 'Heng Li', 'Qinghou Zeng'],
    arxiv: 'https://arxiv.org/abs/2211.07913',
    journal: {
      citation: 'The Electronic Journal of Combinatorics 31(4), #P4.55 (2024)',
      url: 'https://doi.org/10.37236/12223',
    },
  },
  {
    title: 'A 2-stable family of triple systems',
    authors: ['Yixiao Zhang', 'Jianfeng Hou', 'Heng Li'],
    journal: {
      citation: 'The Electronic Journal of Combinatorics 31(2), #P2.3 (2024)',
      url: 'https://doi.org/10.37236/11701',
    },
  },
  {
    title: 'A family of 4-uniform hypergraphs with no stability',
    authors: ['Yixiao Zhang', 'Heng Li', 'Jianfeng Hou'],
    journal: {
      citation: 'Scientia Sinica Mathematica 54(11), 1905–1924 (2024)',
      url: 'https://doi.org/10.1360/SSM-2023-0059',
    },
  },
  {
    title: 'Generating non-jumps from a known one',
    authors: ['Jianfeng Hou', 'Heng Li', 'Caihong Yang', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2208.00794',
    journal: {
      citation: 'Science China Mathematics 67(12), 2899–2908 (2024)',
      url: 'https://doi.org/10.1007/s11425-023-2196-x',
    },
  },
  {
    title: 'Hypergraphs with infinitely many extremal constructions',
    authors: ['Jianfeng Hou', 'Heng Li', 'Xizhi Liu', 'Dhruv Mubayi', 'Yixiao Zhang'],
    arxiv: 'https://arxiv.org/abs/2206.03948',
    journal: {
      citation: 'Discrete Analysis 2023:18 (2023)',
      url: 'https://doi.org/10.19086/da.88508',
    },
  },
  {
    title: 'Singular Turán numbers of stars',
    authors: ['Gaoxing Sun', 'Heng Li', 'Qinghou Zeng', 'Jianfeng Hou'],
    journal: {
      citation: 'Pure and Applied Mathematics Quarterly 18(6), 2599–2618 (2022)',
      url: 'https://doi.org/10.4310/PAMQ.2022.v18.n6.a12',
    },
  },
  {
    title: 'On (3, r)-choosability of some planar graphs',
    authors: ['Heng Li', 'Jianfeng Hou', 'Hongguo Zhu'],
    journal: {
      citation: 'Bulletin of the Malaysian Mathematical Sciences Society 45(2), 851–867 (2022)',
      url: 'https://doi.org/10.1007/s40840-021-01218-4',
    },
  },
];

const publicationGroups = [
  {
    title: 'Preprints / Submitted',
    description: 'Comments are welcome.',
    papers: preprints,
  },
  {
    title: 'Published / Accepted',
    description: '',
    papers: acceptedPublications,
  },
  {
    title: 'Research Notes',
    description: '',
    papers: researchNotes,
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Heng Li, back to top">
          Heng Li
        </a>
        <nav aria-label="Primary navigation">
          {navigation.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section className="hero" id="top" aria-labelledby="page-title">
        <div className="hero-formulas" aria-hidden="true">
          <span className="formula formula-one">
            ex(n, F) = max&#123;e(G) : |V(G)| = n, F ⊄ G&#125;
          </span>
          <span className="formula formula-two">
            π(F) = limₙ→∞ ex(n, F) / C(n, r)
          </span>
          <span className="formula formula-three">
            δᵣ₋₁(H) ≥ (1/2 + ε)n
          </span>
          <span className="formula formula-four">
            ∑<sub>S∈C(V,r)</sub> x<sub>S</sub>
          </span>
          <span className="formula formula-five">
            K<sub>t</sub><sup>(r)</sup> ⊄ H
          </span>
          <span className="formula formula-six">
            e(H) ≥ (π(F) + ε) C(n, r)
          </span>
        </div>

        <div className="hero-copy">
          <h1 id="page-title">Heng Li</h1>
          <div className="hero-biography">
            <p>
              I am currently a visiting scholar in the Extremal Combinatorics
              and Probability Group (ECOPRO) at the Institute for Basic Science
              (IBS) in South Korea, working with Professor{' '}
              <a
                href="https://www.ibs.re.kr/ecopro/hongliu/"
                rel="noreferrer"
                target="_blank"
              >
                Hong Liu
              </a>
              .
            </p>
            <p>
              From July 2023 to July 2026, I was a postdoctoral researcher at
              Shandong University, working with Professor{' '}
              <a
                href="https://faculty.sdu.edu.cn/wangguanghui1/en/index.htm"
                rel="noreferrer"
                target="_blank"
              >
                Guanghui Wang
              </a>
              .
            </p>
            <p>
              I received my Ph.D. from Fuzhou University in June 2023 under the
              supervision of Professor{' '}
              <a
                href="https://math.fzu.edu.cn/info/1116/6182.htm"
                rel="noreferrer"
                target="_blank"
              >
                Jianfeng Hou
              </a>
              .
            </p>
          </div>
        </div>

        <aside className="hero-sidebar" aria-label="Portrait and contact information">
          <figure className="hero-photo-slot">
            <Image
              alt="Portrait of Heng Li"
              className="hero-photo-image"
              fill
              priority
              sizes="(max-width: 640px) calc(100vw - 48px), (max-width: 900px) 360px, 264px"
              src="/heng-li-portrait.png"
              unoptimized
            />
          </figure>

          <div className="hero-sidebar-details">
            <a className="hero-email-card" href="mailto:heng.li@sdu.edu.cn">
              <strong>heng.li@sdu.edu.cn</strong>
            </a>

            <div className="hero-research-card" aria-label="Research interests">
              <span>Extremal Combinatorics</span>
              <span>Extremal Hypergraph Theory</span>
            </div>
          </div>
        </aside>

      </section>

      <section className="content-section" id="publications" aria-labelledby="publications-title">
        <div className="section-heading">
          <h2 id="publications-title">Publications</h2>
        </div>

        <div className="publication-groups">
          {publicationGroups.map((group) => (
            <article className="publication-group" key={group.title}>
              <div className="publication-group-title">
                <h3>{group.title}</h3>
                {group.description && <p>{group.description}</p>}
              </div>

              <ol className="publication-list">
                {group.papers.map((paper, index) => (
                  <li className="publication-item" key={paper.title}>
                    <span className="publication-index">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="publication-entry">
                      <h4>{paper.title}</h4>
                      <p className="publication-authors">
                        {paper.authors.map((author, authorIndex) => (
                          <span key={`${paper.title}-${author}`}>
                            {authorIndex > 0 && ', '}
                            {author === 'Heng Li' ? <strong>{author}</strong> : author}
                          </span>
                        ))}
                      </p>
                      {paper.journal && (
                        <p className="publication-venue">
                          <a href={paper.journal.url} rel="noreferrer" target="_blank">
                            {paper.journal.citation} ↗
                          </a>
                        </p>
                      )}
                    </div>

                    {(paper.arxiv || paper.manuscript) && (
                      <div className="publication-links" aria-label={`Links for ${paper.title}`}>
                        {paper.arxiv && (
                          <a href={paper.arxiv} rel="noreferrer" target="_blank">
                            arXiv ↗
                          </a>
                        )}
                        {paper.manuscript && (
                          <a href={paper.manuscript} rel="noreferrer" target="_blank">
                            Manuscript ↗
                          </a>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>© 2026 Heng Li</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
