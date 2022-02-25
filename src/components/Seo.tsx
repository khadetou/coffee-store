import { Head } from "next/document";
import { FC } from "react"

interface SeoProps {
    title: string
    description: string
    meta: any[];
    author: string;
    lang: string;
}

const Seo:FC<SeoProps> = ({title, description, meta, author, lang}) => {
    const metaData = [
        {
            name: "description",
            content: description,
        },
        {
            property: "og:title",
            content: title,
        },
        {
            property: "og:description",
            content: description,
        },
        {
            property: "og:type",
            content: "website"
        },
        {
            name: "twitter:card",
            content: "summary"
        },
        {
            name:"twitter:creator",
            content: author
        },
        {
            name:"twitter:title",
            content: title
        },
        {
            name: "twitter:description",
            content: description
        }
    ].concat(meta!);

  return (
    <Head><title>{title}</title>
        {
            metaData.map(({name, content},  i)=>(
                <meta key={i} name={name} content={content} />
            ))
        }
    </Head>
  )
}

export default Seo;