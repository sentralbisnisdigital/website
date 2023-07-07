import type { FC } from 'react'
import type { GetImageResult } from 'astro'
import type { CollectionEntry } from 'astro:content'
import { marked } from 'marked'
import parse from 'html-react-parser'
import PhoneIcon from '~icons/material-symbols/phone-android-rounded'
import EmailIcon from '~icons/material-symbols/alternate-email-rounded'
import WebIcon from '~icons/material-symbols/globe-asia'
import LinkIcon from '~icons/material-symbols/arrow-outward-rounded'

const FooterComp: FC<{
  logo: GetImageResult
  site: CollectionEntry<'site'>
  menus?: CollectionEntry<'menu'>[]
}> = ({ logo, site, menus }) => (
  <>
    <FooterLegalSection logo={logo} site={site} />
    {menus?.map((menu, i) => (
      <FooterMenuSection menu={menu} key={i} />
    ))}
  </>
)

const FooterLegalSection: FC<{
  logo: GetImageResult
  site: CollectionEntry<'site'>
}> = ({ logo, site }) => (
  <div>
    <img
      src={logo.src}
      width={logo.options.width}
      height={logo.options.height}
      className="w-max h-[35px]"
      alt={site.data.legal.name}
      loading="lazy"
      decoding="async"
    />
    <h3 className="footer-title">{site.data.legal.name}</h3>
    <span>NPWP: {site.data.legal.npwp}</span>
    <>{parse(marked.parse(site.data.legal.address as string))}</>
    <a
      className="flex flex-row items-center gap-[2px] link link-hover"
      href={`https://wa.me/62${site.data.legal.phone?.substring(1)}`}
    >
      <span>
        <PhoneIcon />
      </span>
      <span>{site.data.legal.phone}</span>
    </a>
    <a
      className="flex flex-row items-center gap-[2px] link link-hover"
      href={`mailto:${site.data.legal.email}`}
    >
      {' '}
      <span>
        <EmailIcon />
      </span>
      <span>{site.data.legal.email}</span>
    </a>
    <a
      className="flex flex-row items-center gap-[2px] link link-hover"
      href="/"
    >
      {' '}
      <span>
        <WebIcon />
      </span>
      <span>{site.data.legal.website}</span>
    </a>
    <a
      className="flex flex-row items-center gap-[2px] link link-hover"
      href="/legal"
    >
      {' '}
      <span>
        <LinkIcon />
      </span>
      <span>Info Legal</span>
    </a>
  </div>
)

const FooterMenuSection: FC<{
  menu: CollectionEntry<'menu'>
}> = ({ menu }) => (
  <div>
    <h3 className="footer-title">{menu.data.title}</h3>
    {menu.data.items.map((item, i) => (
      <a className="link link-hover" href={item.href} key={i}>
        {item.title}
      </a>
    ))}
  </div>
)

export default FooterComp
